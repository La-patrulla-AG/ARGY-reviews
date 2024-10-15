from rest_framework import serializers
from .models import *
       
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())
    reviews = serializers.PrimaryKeyRelatedField(many=True, queryset=Review.objects.all())
    
    class Meta:
        model = User
        fields = ['id', 'username', 'posts', 'reviews']
 
class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Post
        fields = '__all__'
        
class ReviewSerializer(serializers.ModelSerializer): 
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Review
        fields = '__all__'