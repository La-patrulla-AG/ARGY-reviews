"""
This file contains the serializers for the API.
A serializer is a class that converts complex data types, such as querysets and model instances, into native Python data types that can then be easily rendered into JSON, XML, or other content types.
"""

from django.contrib.auth.models import User  # This is the default user model provided by Django
from django.contrib.contenttypes.models import ContentType
from django.db.models import Avg
from rest_framework import serializers
from rest_framework.authtoken.models import Token
import random
import string

from .models import Post, PostState, Category, Review, Report, ReportCategory  # Models are necessary to be imported in order to create the serializers

"""Auxiliary functions"""
def generate_code():
    """
    This function generates automatically generates 
    an alphanumeric code of 8 characters.
    """
    
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

"""Serializers"""

# UserSerializer
# ----------------
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        # Remove posts and reviews from validated_data if they exist
        validated_data.pop('posts', None)
        validated_data.pop('reviews', None)
        
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        Token.objects.create(user=user)
        return user
    
    def get_auth_token(self, obj):
        token, created = Token.objects.get_or_create(user=obj)
        return token.key

# PostSerializer
# -------------------
class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'code', 'avg_ratings', 'owner', 'image', 'verification_state']
        
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = generate_code()
        
        if 'verification_state' not in validated_data:
            validated_data['verification_state'] = PostState.objects.get(name='not_verified')
        else:
            validated_data['verification_state'] = PostState.objects.get(id=validated_data['verification_state'])
            
        return super().create(validated_data)
    
    def get_url(self, obj):
        return obj.image.url

# PostStateSerializer
# --------------------
class PostStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostState
        fields = ['id', 'name']

# ReviewSerializer
# -------------------------
class ReviewSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Review
        fields = ['id','code', 'title', 'content', 'created_at', 'avg_ratings', 'owner']
    
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = generate_code()
            
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

# ReportCategorySerializer
# -------------------------
class ReportCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportCategory
        fields = ['id', 'name']

# ReportSerializer
# -----------------
class ReportSerializer(serializers.ModelSerializer):
    reporter = serializers.StringRelatedField()  # Para mostrar el nombre del usuario que reporta
    category = ReportCategorySerializer()
    reported_object = serializers.SerializerMethodField()

    class Meta:
        model = Report
        fields = [
            'id', 
            'created_at', 
            'code', 
            'reporter', 
            'reported_object', 
            'category', 
            'content', 
            'resolved'
        ]

    def get_reported_object(self, obj):
        # Obtener el tipo de contenido (modelo) y el ID del objeto
        content_type = ContentType.objects.get_for_id(obj.reported_content_type.id)
        model_class = content_type.model_class()
        
        # Obtener el objeto específico reportado
        try:
            reported_object = model_class.objects.get(id=obj.reported_object_id)
            return str(reported_object)  # Convertir el objeto en string o en la información que desees mostrar
        except model_class.DoesNotExist:
            return None