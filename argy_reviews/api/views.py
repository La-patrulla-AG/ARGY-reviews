from .models import Post, Review, Report
from .serializers import PostSerializer, ReviewSerializer, UserSerializer

from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics

from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from django.db import IntegrityError

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from django.utils import timezone
from datetime import timedelta
from django.db.models import Avg, Max

# TODO


# UserList 
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# User-Detail
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
@api_view(['GET'])
@permission_classes([AllowAny])
def get_carousels_data(request):
    # 1. Posts recientes
    recent_posts = Post.objects.order_by('-created_at')[:15]

    # 2. Mejores del mes (últimos 30 días)
    date_limit = timezone.now() - timedelta(days=30)
    best_posts = Post.objects.filter(
        review__created_at__gte=date_limit
    ).annotate(
        avg_rating=Avg('review__rating')
    ).order_by('-avg_rating')[:15]

    # 3. Recientemente reseñados
    recently_reviewed_posts = Post.objects.filter(
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
@api_view(['GET', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
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
@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def reviews_list(request, post_pk):
    """
    List all reviews for a specific post or create a new review for that post.
    """
    try:
        post = Post.objects.get(pk=post_pk)
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
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    """
    Login a user.
    """
    user = get_object_or_404(User, username=request.data['username'])
    
    if not user.check_password(request.data['password']):
        return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    
    return Response({"user": serializer.data, "token": token.key}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """
    Register a user.
    """
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
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    """
    Retrieve the profile of the user.
    """
    serializer = UserSerializer(instance=request.user)
    
    return Response(serializer.data, status=status.HTTP_200_OK)
    
# @api_view(['GET', 'POST'])
# @permission_classes([AllowAny])
# def image_list(request):
#     if request.method == 'GET':
#         images = ImageModel.objects.all()
#         serializer = ImageSerializer(images, many=True)
#         return Response(serializer.data)
    
#     elif request.method == 'POST':
#         serializer = ImageSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)