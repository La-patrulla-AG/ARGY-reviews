from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('api.urls')),
    path('', include('django.contrib.auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    re_path(r"^.*$", TemplateView.as_view(template_name="frontend/index.html")),
]

