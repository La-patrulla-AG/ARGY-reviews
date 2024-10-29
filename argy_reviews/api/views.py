from datetime import timedelta

from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from django.db.models import Avg, Max
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics, status
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .authentication import CsrfExemptSessionAuthentication
from .models import Post, PostState, Report, Review, PostImage, ReportCategory, PostImage, UserProfile
from .serializers import PostSerializer, ReviewSerializer, UserSerializer, PostStateSerializer, ReportCategorySerializer, ReportSerializer, ImageSerializer, UserProfileSerializer

# TODO
# - [x] Crear una view para listar todos los reportes
# - [x] Hacer que la view de los reportes sea solo accesible por los administradores
# - Intentar subir un report
# - Hacer que el motodo POST de post_list sea solo accesible por autenticacion.

"""Funciones auxiliares"""
def get_verified_post_state_id(estate) -> int:
    try:
        return PostState.objects.get(name=estate).id
    except PostState.DoesNotExist:
        return Response({"error": "Verified state not found"}, status=status.HTTP_404_NOT_FOUND)


"""Views auxiliares"""
@api_view(['GET'])
def content_types(request) -> Response:
    content_types = ContentType.objects.all()
    data = {ct.model: ct.id for ct in content_types}
    return Response(data)

# PostState-List
# --------------
@api_view(['GET'])
@permission_classes([AllowAny])
def post_state_list(request):
    """
    List all post states.
    """
    post_states = PostState.objects.all()
    serializer = PostStateSerializer(post_states, many=True)
    return Response(serializer.data)

"""Views de la aplicación"""
VERIFIED_STATE = get_verified_post_state_id('verified')
UNVERIFIED_STATE = get_verified_post_state_id('not_verified')

# UserList 
# --------
@api_view(['GET'])
@permission_classes([AllowAny])
def user_list(request):
     if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

# UserProfile 
# -----------
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    if request.method == 'GET':
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User-Detail
# -----------
@api_view(['GET'])
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
@permission_classes([AllowAny])
def get_carousels_data(request):
    
    # 1. Posts recientes
    recent_posts = Post.objects.filter(
        verification_state=VERIFIED_STATE
    ).order_by('-created_at')[:15]

    # 2. Mejores del mes (últimos 30 días)
    date_limit = timezone.now() - timedelta(days=30)
    best_posts = Post.objects.filter(
        verification_state=VERIFIED_STATE,
        review__created_at__gte=date_limit
    ).annotate(
        avg_rating=Avg('review__rating')
    ).order_by('-avg_rating')[:15]

    # 3. Recientemente reseñados
    recently_reviewed_posts = Post.objects.filter(
        verification_state=VERIFIED_STATE,
        review__isnull=False
    ).annotate(
        last_review=Max('review__created_at')
    ).order_by('-last_review')[:15]

    # Serializa los datos usando PostSerializer
    recent_posts_serialized = PostSerializer(recent_posts, many=True)
    best_posts_serialized = PostSerializer(best_posts, many=True)
    recently_reviewed_serialized = PostSerializer(recently_reviewed_posts, many=True)

    # Estructura los datos en un diccionario para responder
    data = {
        'recent_posts': recent_posts_serialized.data,
        'best_posts': best_posts_serialized.data,
        'recently_reviewed_posts': recently_reviewed_serialized.data,
    }

    # Devuelve los datos como una respuesta JSON
    return Response(data)

# Post-List
# ---------
@api_view(['GET', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
# @permission_classes([AllowAny])
def post_list(request):
    """
    List all posts or create a new post.
    """
    
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

# Post-Detail   
# ------------
@api_view(['GET', 'PUT', 'DELETE'])
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
        # Requerires atutentication to update and delete a post
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        # Verifies if the user is the owner of the post
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
@permission_classes([AllowAny])
def reviews_list(request, post_pk):
    """
    List all reviews for a specific post or create a new review for that post.
    """
    try:
        post = Post.objects.filter(verification_state=VERIFIED_STATE).get(pk=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        reviews = Review.objects.filter(post=post)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user, post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Review-Detail
# -------------
@api_view(['GET', 'PUT', 'DELETE'])
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
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Login
# -----
@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
def login(request):
    """
    Login a user.
    """
    username_or_email = request.data.get('username_or_email')
    password = request.data.get('password')

    # Buscar usuario por username o email
    user = User.objects.filter(username=username_or_email).first() or User.objects.filter(email=username_or_email).first()

    if user is None:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    if not user.check_password(password):
        return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)

    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)

    return Response({"user": serializer.data, "token": token.key}, status=status.HTTP_200_OK)

# Register
# --------
@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
def register(request):
    """
    Register a user.
    """
    
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Profile
# -------
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    """
    Retrieve the profile of the user.
    """
    serializer = UserSerializer(instance=request.user)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

# Report-List
# -----------
@api_view(['GET', 'POST'])
#@authentication_classes([TokenAuthentication])
#@permission_classes([IsAdminUser])
@permission_classes([IsAuthenticated])
def report_list(request):
    """
    List all reports or create a new report.
    """
    if request.method == 'GET':
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(reporter=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Report-Detail
# -------------
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAdminUser, IsAuthenticated])
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
        # Requerires atutentication to update and delete a post
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        # Verifies if the user is the owner of the post
        if report.owner != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        if request.method == 'PUT':
            serializer = ReportSerializer(report, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            report.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

# Image-List
# ------------
@api_view(['GET','POST'])
def image_upload(request, post_pk):
    """
    Upload an image for a post.
    """
    if request.method == 'GET':
        images = PostImage.objects.filter(post_id=post_pk)
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Image-Detail
# ------------
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def image_detail(request, post_pk, image_pk):
    """
    Retrieve, update or delete an image.
    """
    try:
        image = PostImage.objects.get(pk=image_pk, post_id=post_pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ImageSerializer(image)
        return Response(serializer.data)

    elif request.method in ['PUT', 'DELETE']:
        if request.method == 'PUT':
            serializer = ImageSerializer(image, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            image.delete()
            return Response(status=status.HTTP_204_NO_CONTENT) 


#print(get_verified_post_state_id())