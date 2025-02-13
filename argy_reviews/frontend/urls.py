from django.urls import path
from .views import index

urlpatterns = [
    path('', index,name=''),
    path('post/<str:postId>', index),
    path('crear-post',index),
    path('editar-post/<str:postId>',index),
    path('mis-publicaciones',index) ,
    path('reglas',index),
    path('terminos-condiciones',index), 
    path('privacidad',index),  
    path('trabaja-con-nosotros', index),
]