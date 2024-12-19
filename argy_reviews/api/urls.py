from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
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
    path('profile/<int:user_pk>/', views.user_profile, name='profile'),
    
    path('post-states/', views.post_state_list, name='post-state-list'),
    path('carousels/', views.get_carousels_data, name='get_carousels_data'),
    path('posts/', views.post_list, name='post-list'),
    path('posts/<int:post_pk>/', views.post_detail, name='post-detail'),
    
    path('posts/<int:post_pk>/reviews/', views.reviews_list, name='reviews-list'),
    path('posts/<int:post_pk>/reviews/<int:review_pk>/', views.review_detail, name='review-detail'),
    
    path('posts/<int:post_pk>/reviews/<int:review_pk>/ratings/', views.valorations_count, name='valorations-count'),
    
    path('reports/', views.report_list, name='report-list'),
    path('reports/<int:report_pk>/', views.report_detail, name='report-detail'),
    
    # API DOCS
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




urlpatterns = format_suffix_patterns(urlpatterns)