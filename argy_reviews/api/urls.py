from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import UserList
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    #re_path('login/', views.login, name='login'),
    path('carousels/', views.get_carousels_data, name='get_carousels_data'),
    re_path('register/', views.register, name='register'),
    re_path('profile/', views.profile, name='profile'),
    
    path('users/', UserList.as_view()),
    path('users/<int:user_pk>', views.user_detail, name='user-detail'),
    
    path('carousels/', views.get_carousels_data, name='get_carousels_data'),
    path('posts/', views.post_list, name='post-list'),
    path('posts/<int:post_pk>/', views.post_detail, name='post-detail'),
    path('posts/<int:post_pk>/reviews/', views.reviews_list, name='reviews-list'),
    path('posts/<int:post_pk>/reviews/<int:review_pk>/', views.review_detail, name='review-detail')
]

urlpatterns = format_suffix_patterns(urlpatterns)