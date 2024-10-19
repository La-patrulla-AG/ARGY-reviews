from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import UserList
from django.contrib import admin

urlpatterns = [
    #re_path('login/', views.login, name='login'),
    re_path('register/', views.register, name='register'),
    re_path('profile/', views.profile, name='profile'),
    path('users/', UserList.as_view()),
    path('posts/', views.post_list, name='post-list'),
    path('posts/<int:pk>/', views.post_detail, name='post-detail'),
    path('posts/<int:pk>/reviews/', views.reviews_list, name='reviews-list'),
    path('posts/<int:pk>/reviews/<int:review_pk>/', views.review_detail, name='review-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)