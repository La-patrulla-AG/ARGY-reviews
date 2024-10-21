"""
This file contains the serializers for the API.
A serializer is a class that converts complex data types, such as querysets and model instances, into native Python data types that can then be easily rendered into JSON, XML, or other content types.
"""

from rest_framework import serializers
from .models import * #Models are necesary to be imported in order to create the serializers
from django.db.models import Avg
from django.contrib.auth.models import User #This is the default user model provided by Django

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())
    reviews = serializers.PrimaryKeyRelatedField(many=True, queryset=Review.objects.all())
    
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'posts', 'reviews']
        
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
        fields = ['id', 'title', 'content', 'created_at', 'code', 'avg_ratings', 'owner', 'image_url']
        
        # This refactorization of the create method is to make the code generation of the post code automatic
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        return super().create(validated_data)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'code', 'created_at', 'rating', 'comment', 'owner']
    
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
            
        review =  super().create(validated_data)
        self.update_post_avg_rating(review.post)
        return review
    
    def update(self, instance, validated_data):
        post = instance.post  # Guardar el post antes de actualizar
        instance = super().update(instance, validated_data)
        self.update_post_avg_rating(post)
        return instance
    
    def update_post_avg_rating(self, post):
        reviews = post.review_set.all()
        if reviews.exists():
            post.avg_ratings = reviews.aggregate(Avg('rating'))['rating__avg']
        else:
            post.avg_ratings = 0
        post.save()
    
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id', 'code', 'created_at', 'content']
    
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        return super().create(validated_data)