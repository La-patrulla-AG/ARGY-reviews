from datetime import timedelta

from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from django.db.models import Avg, Max, Count, F
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics, status
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .authentication import CsrfExemptSessionAuthentication
from .models import Post, PostState, Report, Review, PostImage, ReportCategory, PostImage, BanStatus, Valoration, PostCategory
from .serializers import PostSerializer, ReviewSerializer, SensibleUserSerializer, PostStateSerializer, ReportCategorySerializer, ReportSerializer, ImageSerializer, UserProfileSerializer, ValorationSerializer, PostCategorySerializer, ContentTypeSerializer, UserSerializer, BanStatusSerializer

from .permissions import IsNotBanned, IsStaffUser, OptionalJWTAuthentication
from django.http import JsonResponse
from django.middleware.csrf import get_token

from django.views.decorators.csrf import csrf_exempt

# TODO
# - [x] Crear una view para listar todos los reportes
# - [x] Hacer que la view de los reportes sea solo accesible por los administradores
# - Intentar subir un report
# - Hacer que el motodo POST de post_list sea solo accesible por autenticacion.

"""Funciones auxiliares"""
def get_post_state_id(state) -> int:
    try:
        return PostState.objects.get(name=state).id
    except PostState.DoesNotExist:
        return Response({"error": "Verified state not found"}, status=status.HTTP_404_NOT_FOUND)

def bayesian_rating(post_rating: float, post_votes: int, global_avg: float, min_votes: int) -> float:
    """
    Calcula la puntuación bayesiana de una publicación.

    :param post_rating: Promedio de calificación del post
    :param post_votes: Número de votos del post
    :param global_avg: Calificación promedio global de todas las publicaciones
    :param min_votes: Número mínimo de votos para considerar un post confiable
    :return: Puntuación ajustada para ranking
    """
    return (post_rating * post_votes + global_avg * min_votes) / (post_votes + min_votes)


"""Views auxiliares"""
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication]) 
def content_types(request) -> Response:
    content_types = ContentType.objects.all()
    data = {ct.model: ct.id for ct in content_types}
    return Response(data)

# PostState-List
# --------------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication]) 
@permission_classes([AllowAny])
def post_state_list(request):
    """
    List all post states.
    """
    post_states = PostState.objects.all()
    serializer = PostStateSerializer(post_states, many=True)
    return Response(serializer.data)

# UserList 
# --------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication]) 
@permission_classes([IsAdminUser])
def user_list(request):
     if request.method == 'GET':
        users = User.objects.all()
        serializer = SensibleUserSerializer(users, many=True)
        return Response(serializer.data)

# BanStatus 
# -----------
@api_view(['GET','POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication]) 
@permission_classes([IsAuthenticated])
def ban_status(request, user_id):
    if request.method == 'GET':
        try:
            ban_status = BanStatus.objects.get(user=user_id)
            serializer = BanStatusSerializer(ban_status)
            return Response(serializer.data)
        except BanStatus.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND);
    elif request.method == 'POST':
        serializer = BanStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User-Detail
# -----------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def user_detail(request, user_pk):
    """
    Retrieve a user instance.
    """
    if request.method == 'GET':
        try:
            user = User.objects.get(pk=user_pk)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)
        return Response(serializer.data)

# Carousels
# ---------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def get_carousels_data(request):
    
    # 1. Posts recientes
    recent_posts = Post.objects.filter(
        verification_state=get_post_state_id('verified')
    ).order_by('-created_at')[:15]

    # 2. Mejores del mes (últimos 30 días)
    date_limit = timezone.now() - timedelta(days=30)
    best_posts = Post.objects.filter(
        verification_state=get_post_state_id('verified'),
        review__created_at__gte=date_limit
    ).annotate(
        avg_rating=Avg('review__rating')
    ).order_by('-avg_rating')[:15]

    # 3. Recientemente reseñados
    recently_reviewed_posts = Post.objects.filter(
        verification_state=get_post_state_id('verified'),
        review__isnull=False
    ).annotate(
        last_review=Max('review__created_at')
    ).order_by('-last_review')[:15]

    # 4. Promedio de los promedios
    average_of_averages = Post.objects.aggregate(average_of_averages=Avg('avg_ratings'))['average_of_averages']
    if average_of_averages is None:
        average_of_averages = 0
    
    # 5. Mejores puntuados según el ranking bayesiano
    min_votes = 3  # Número mínimo de votos para considerar un post confiable
    one_week_ago = timezone.now() - timedelta(days=7)
    posts_with_bayesian_ranking = Post.objects.annotate(
        review_count=Count('review'),
        bayesian_rating=(F('avg_ratings') * F('review_count') + average_of_averages * min_votes) / (F('review_count') + min_votes)
    ).filter(
        verification_state=get_post_state_id('verified'),
        review_count__gte=min_votes, 
        created_at__gte=one_week_ago
    ).order_by('-bayesian_rating')[:15]
    
    # Serializa los datos usando PostSerializer
    recent_posts_serialized = PostSerializer(recent_posts, many=True)
    best_posts_serialized = PostSerializer(best_posts, many=True)
    recently_reviewed_serialized = PostSerializer(recently_reviewed_posts, many=True)
    bayesian_ranked_posts_serialized = PostSerializer(posts_with_bayesian_ranking, many=True)


    # Estructura los datos en un diccionario para responder
    data = {
        'recent_posts': recent_posts_serialized.data,
        'best_posts': best_posts_serialized.data,
        'recently_reviewed_posts': recently_reviewed_serialized.data,
        'bayesian_ranked_posts': bayesian_ranked_posts_serialized.data,
    }

    # Devuelve los datos como una respuesta JSON
    return Response(data)

# Post-List
# ---------
@api_view(['GET', 'POST'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication])  
@permission_classes([AllowAny])
def post_list(request):
    """
    List all posts or create a new post.
    """
    
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED,)
        
        permission = IsNotBanned()
        if not permission.has_permission(request, None):
            return Response({'detail': 'You are banned and cannot perform this action.'}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(verification_state=PostState.objects.get(name='verified'), owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Post-Detail   
# ------------
@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication])  
@permission_classes([AllowAny])
def post_detail(request, post_pk):
    """
    Retrieve, update or delete a post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        # Allows acceses to lecture without authentication
        serializer = PostSerializer(post)
        return Response(serializer.data)

    elif request.method in ['PUT', 'DELETE']:
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        if post.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        if request.method == 'PUT':
            serializer = PostSerializer(post, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            post.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

# Reviews-List
# ------------
@api_view(['GET', 'POST'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication]) 
@permission_classes([AllowAny])
def reviews_list(request, post_pk):
    """
    List all reviews for a specific post or create a new review for that post.
    """
    try:
        # post = Post.objects.filter(verification_state=get_post_state_id('verified')).get(pk=post_pk) 
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        reviews = Review.objects.filter(post=post)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        if Review.objects.filter(post=post, owner=request.user).exists():
            return Response({"error": "Ya has reseñado esta publicacion. Por favor edita o elimina tu reseña existente."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user, post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Review-Detail
# -------------
@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication])  
@permission_classes([AllowAny])
def review_detail(request, post_pk, review_pk):
    """
    Retrieve, update or delete a review instance.
    """
    try:
        review = Review.objects.get(pk=review_pk, post_id=post_pk)
    except Review.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    elif request.method == 'PUT':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        if review.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        if review.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Login
# -----
# @api_view(['POST'])
# @permission_classes([AllowAny])
# @authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
# def login(request):
#     """
#     Login a user.
#     """
#     #if request.user.is_authenticated:
#         #return Response({"error": "You are already logged in."}, status=status.HTTP_400_BAD_REQUEST)
    
#     username_or_email = request.data.get('username_or_email')
#     password = request.data.get('password')

#     # Buscar usuario por username o email
#     user = User.objects.filter(username=username_or_email).first() or User.objects.filter(email=username_or_email).first()

#     if user is None:
#         return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

#     if not user.check_password(password):
#         return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)

#     token, created = Token.objects.get_or_create(user=user)
#     serializer = SensibleUserSerializer(instance=user)

#     return Response({"user": serializer.data, "token": token.key}, status=status.HTTP_200_OK)

# # Register
# # --------
# @api_view(['POST'])
# @permission_classes([AllowAny])
# @authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
# def register(request):
#     """
#     Register a user.
#     """
    
#     #if request.user.is_authenticated:
#         #return Response({"error": "You are already registered and logged in."}, status=status.#HTTP_400_BAD_REQUEST)
    
#     if request.method == 'POST':
#         serializer = SensibleUserSerializer(data=request.data)
#         if serializer.is_valid():
#             try:
#                 user = serializer.save()
#                 token, created = Token.objects.get_or_create(user=user)
#                 return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
#             except IntegrityError:
#                 return Response({"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# BanStatus 
# -----------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAuthenticated])
def user_profile(request, user_pk):
    if request.method == 'GET':
        try:
            user = User.objects.get(pk=user_pk)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)

# Report-List
# -----------
@api_view(['GET', 'POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
#@authentication_classes([TokenAuthentication])
#@permission_classes([IsAdminUser, IsAuthenticated])
@permission_classes([IsAuthenticated])
def report_list(request):
    """
    List all reports or create a new report.
    """
    if request.method == 'GET':
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = request.data.copy()
        data['reporter'] = request.user.id
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save(reporter=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response(
                    {"message": "Ya has reportado este contenido."},
                    status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Report-Detail
# -------------
@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
#@permission_classes([IsAdminUser, IsAuthenticated])
@permission_classes([IsStaffUser, IsAuthenticated])
def report_detail(request, report_pk):
    """
    Retrieve, update or delete a report.
    """
    try:
        report = Report.objects.get(pk=report_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        # Allows acceses to lecture without authentication
        serializer = ReportSerializer(report)
        return Response(serializer.data)

    elif request.method in ['PUT', 'DELETE']:       
        # Verifies if the user is the owner of the post

        if request.method == 'PUT':
            serializer = ReportSerializer(report, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            report.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

# Report-Category-List
@api_view(['GET', 'POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAuthenticated])
def report_category_list(request):
    """
    List all report categories.
    """
    if request.method == 'GET':
        categories = ReportCategory.objects.all()
        serializer = ReportCategorySerializer(categories, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        serializer = ReportCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Image-List
# ------------
@api_view(['GET','POST','PUT'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication])  
@permission_classes([AllowAny])
def image_upload(request, post_pk):
    """
    Upload an image for a post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        images = PostImage.objects.filter(post=post)
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        if post.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        # Eliminar todas las imágenes actuales del post
        PostImage.objects.filter(post=post).delete()
        
        # Agregar las nuevas imágenes
        serializer = ImageSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save(post=post)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Image-Detail
# ------------
@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAuthenticated])
def image_detail(request, post_pk, image_pk):
    """
    Retrieve, update or delete an image.
    """
    try:
        post = Post.objects.get(pk=post_pk)
        image = PostImage.objects.get(pk=image_pk, post_id=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ImageSerializer(image)
        return Response(serializer.data)

    elif request.method in ['PUT', 'DELETE']:   
        if post.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        if request.method == 'PUT':
            serializer = ImageSerializer(image, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            image.delete()
            return Response(status=status.HTTP_204_NO_CONTENT) 

# Valorations-Count
# -----------------
@api_view(['GET', 'POST'])
@authentication_classes([CsrfExemptSessionAuthentication, OptionalJWTAuthentication])  
@permission_classes([AllowAny])
def valorations_count(request, post_pk, review_pk):
    """
    Retrieve the count of likes and dislikes for a specific post.
    """
    if request.method == 'GET':
        try:
            post = Post.objects.filter(verification_state=get_post_state_id('verified')).get(pk=post_pk)
            review = Review.objects.get(pk=review_pk, post=post)

            likes_count = Valoration.objects.filter(valoration=True, review=review).count()
            dislikes_count = Valoration.objects.filter(valoration=False, review=review).count()
            data = {
                'likes': likes_count,
                'dislikes': dislikes_count
            }

            return Response(data)

        except Review.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        try:
            post = Post.objects.filter(verification_state=get_post_state_id('verified')).get(pk=post_pk)
            review = Review.objects.get(pk=review_pk, post=post)
            user = request.user

            # Verificar si el usuario ya tiene una valoración en esa review
            existing_valoration = Valoration.objects.filter(user=user, review=review).first()

            if existing_valoration:
                return Response(
                    {"error": "El usuario ya ha valorado esta reseña"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Si no existe, permitimos crear una nueva valoración
            data = request.data.copy()
            data['review'] = review_pk
            data['user'] = user.id  # Aseguramos que el usuario autenticado es el dueño

            serializer = ValorationSerializer(data=data, context={'request': request, "user": user})
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Valoración creada exitosamente'}, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Review.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'DELETE', 'PUT'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAuthenticated])
def valorations_count_detail(request, post_pk, review_pk, user_pk):
    """
    Retrieve the count of likes and dislikes for a specific post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
        review = Review.objects.get(pk=review_pk, post=post)
        valoration = Valoration.objects.get(user=user_pk, review=review)
        
        if request.method == 'GET':
            serializer = ValorationSerializer(valoration)
            return Response(serializer.data)
        
        elif request.method == 'PUT':
            data = request.data.copy()
            data['review'] = review_pk
            
            serializer = ValorationSerializer(valoration, data=data, context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
        elif request.method == 'DELETE':
            valoration.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    except Review.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Valoration.DoesNotExist:
        return Response({ "valoration": None })
    
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])
@permission_classes([IsAuthenticated])
def check_logged_in(request):
    return Response({
        'id': request.user.id,
        'logged_in': True,
        'username': request.user.username,
        'email': request.user.email,
        'is_superuser': request.user.is_superuser,
        'is_staff': request.user.is_staff
        # puedes incluir más datos del usuario
    })
    
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def category_list(request):
    """
    List all report categories.
    """
    categories = PostCategory.objects.all()
    serializer = PostCategorySerializer(categories, many=True)
    return Response(serializer.data)

# ContentTypes
# ------------
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsStaffUser])
def content_type_list(request):
    """
    List all content types.
    """
    content_types = ContentType.objects.all()
    serializer = ContentTypeSerializer(content_types, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def report_category_type_list(request, type_categorie):
    """
    List all report categories.
    """
    if request.method == 'GET':
        categories = ReportCategory.objects.filter(type_categorie=type_categorie)
        serializer = ReportCategorySerializer(categories, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAdminUser])
def ban_user_permanently(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        profile, created = BanStatus.objects.get_or_create(user=user)
        profile.is_banned = True
        profile.banned_until = None
        profile.save()
        return Response({'status': 'User banned permanently'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAdminUser])
def ban_user_temporarily(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        profile, created = BanStatus.objects.get_or_create(user=user)
        days = request.data.get('days', 7)  # Por defecto 7 días
        profile.is_banned = True
        profile.banned_until = timezone.now() + timedelta(days=days)
        profile.save()
        return Response({'status': f'User banned temporarily for {days} days'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, JWTAuthentication])  
@permission_classes([IsAdminUser])
def unban_user(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        profile, created = BanStatus.objects.get_or_create(user=user)
        profile.is_banned = False
        profile.banned_until = None
        profile.save()
        return Response({'status': 'User unbanned'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
   
@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def best_reviews_by_likes(request, post_pk):
    """
    List the best reviews for a specific post by likes.
    """
    try:
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    reviews = Review.objects.filter(post=post).annotate(likes_count=Count('valoration', filter=F('valoration__valoration') == True)).order_by('-likes_count')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def oldest_reviews(request, post_pk):
    """
    List the oldest reviews for a specific post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    reviews = Review.objects.filter(post=post).order_by('created_at')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([CsrfExemptSessionAuthentication])  
@permission_classes([AllowAny])
def newest_reviews(request, post_pk):
    """
    List the newest reviews for a specific post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    reviews = Review.objects.filter(post=post).order_by('-created_at')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SensibleUserSerializer
    permission_classes = [AllowAny]
    
from django.contrib.auth import logout
from django.shortcuts import redirect

@api_view(['POST'])
def logout_view(request):
    logout(request)  # Cierra la sesión
    response = Response({'status': 'User logged out'}, status=status.HTTP_200_OK)

    # Eliminar la cookie sessionid
    response.delete_cookie('sessionid')  # Asegura que se borre la cookie de sesión

    return response # Redirige a la página de login


@api_view(['GET'])
@permission_classes([AllowAny])
def post_list_filtered_by_title_and_category(request):
    """
    
    List all posts filtered by title and/or category.
    """
    title_query = request.GET.get('title', '').strip()
    categories = request.GET.getlist('categories', [])

    posts = Post.objects.all()

    # Filtrar por título si se proporciona
    if title_query:
        posts = posts.filter(title__icontains=title_query)
    
    # Filtrar por categorías si se proporciona
    if categories:
        posts = posts.filter(category__id__in=categories)

    # Limitar a 15 posts
    posts = posts[:15]

    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)
