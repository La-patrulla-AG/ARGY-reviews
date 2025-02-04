from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.contrib.auth import views as auth_views
# from .views import UserList
from django.conf.urls.static import static
from django.conf import settings
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path('types/', views.content_types, name='type-list'),
    path('posts/<int:post_pk>/images/', views.image_upload, name='post-images'),
    path('posts/<int:post_pk>/images/<int:image_pk>', views.image_detail, name='post-images'),
    
    path('categories/', views.category_list, name='category-list'),
    
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    
    path('users/', views.user_list, name='user_list'),
    path('users/<int:user_pk>/', views.user_detail, name='user-detail'),
    path('users/me/', views.me, name='me'),
    path('profile/<int:user_pk>/', views.user_profile, name='profile'),
    
    path('post-states/', views.post_state_list, name='post-state-list'),
    path('carousels/', views.get_carousels_data, name='get_carousels_data'),
    path('posts/', views.post_list, name='post-list'),
    path('posts/<int:post_pk>/', views.post_detail, name='post-detail'),
    
    path('posts/<int:post_pk>/reviews/', views.reviews_list, name='reviews-list'),
    path('posts/<int:post_pk>/reviews/<int:review_pk>/', views.review_detail, name='review-detail'),
    
    path('posts/<int:post_pk>/reviews/<int:review_pk>/valorations/', views.valorations_count, name='valorations-count'),
    path('posts/<int:post_pk>/reviews/<int:review_pk>/valorations/<int:user_pk>', views.valorations_count_detail, name='valorations-count'),
    
    path('reports/', views.report_list, name='report-list'),
    path('reports/<int:report_pk>/', views.report_detail, name='report-detail'),
    path('report_categories/', views.report_category_list, name='report-category-list'),
    path('report_categories/<str:type_categorie>/', views.report_category_type_list, name='report-category-type-list'),
    
    path('content/', views.content_type_list, name='content-list'),
    
    # API DOCS
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    
    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




urlpatterns = format_suffix_patterns(urlpatterns)