"""
This file contains the serializers for the API.
A serializer is a class that converts complex data types, such as querysets and model instances, into native Python data types that can then be easily rendered into JSON, XML, or other content types.
"""

from rest_framework import serializers
from .models import * #Models are necesary to be imported in order to create the serializers
from django.contrib.auth.models import User #This is the default user model provided by Django

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())
    reviews = serializers.PrimaryKeyRelatedField(many=True, queryset=Review.objects.all())
    
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'posts', 'reviews']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user
 
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