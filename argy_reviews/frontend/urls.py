from django.urls import path
from .views import index

urlpatterns = [
    path('', index,name=''),
    path('post/<str:id>', index),
    path('crear-post',index)
]