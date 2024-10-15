from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


urlpatterns = [
    path('users/<int:pk>/', UserDetail.as_view()),
    path('register/', UserRegister.as_view()),
    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('posts/<int:pk>/reviews/', ReviewList.as_view(), name='review-list'),
    path('posts/<int:pk>/reviews/<int:review_pk>/',ReviewDetail.as_view(), name='review-detail'),
]