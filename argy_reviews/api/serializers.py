"""
This file contains the serializers for the API.
A serializer is a class that converts complex data types, such as querysets and model instances, into native Python data types that can then be easily rendered into JSON, XML, or other content types.
"""

from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.db.models import Avg
from rest_framework import serializers
from rest_framework.authtoken.models import Token
import random
import string

from .models import Post, PostState, PostCategory, Review, Report, ReportCategory , PostImage, UserProfile, Valoration

"""Auxiliary functions"""
def generate_code():
    """
    This function generates automatically generates 
    an alphanumeric code of 8 characters.
    """
    
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

"""Serializers"""

# ImageSerializer
# ----------------
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ['id','image','post']

# UserProfileSerializer
class BanStatus(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['is_banned', 'banned_until']


# SensibleUserSerializer
# ----------------
class SensibleUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)  # Declarar explícitamente el campo
    token = serializers.SerializerMethodField()
    date_joined = serializers.ReadOnlyField()
    
    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email', 
            'password',  # Incluir el campo aquí
            'token', 
            'date_joined',
            'is_superuser'
        ]
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        # Extraer la contraseña antes de crear el usuario
        password = validated_data.pop('password', None)
        if not password:
            raise serializers.ValidationError({"password": "This field is required."})
        
        # Crear el usuario utilizando create_user para manejar el hashing
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password  # Pasar la contraseña extraída
        )
        Token.objects.create(user=user)  # Crear un token asociado al usuario
        return user
    
    def get_token(self, obj):
        token, created = Token.objects.get_or_create(user=obj)
        return token.key

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_superuser']


# UserProfilePicture Serializer
# ------------------------------
class UserProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'posts']
    
    def get_posts(self, obj):
        posts = Post.objects.filter(owner=obj).order_by('-created_at')
        return PostSerializer(posts, many=True).data

# CategorySerializer
# -------------------
class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategory
        fields = ['id', 'name']

# PostSerializer
# -------------------
class PostSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'code', 'avg_ratings', 'owner', 'verification_state', 'categories']
        
    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = generate_code()
        
        # if 'verification_state' not in validated_data:
        #     validated_data['verification_state'] = PostState.objects.get(name='verified')
        # else:
        #     validated_data['verification_state'] = PostState.objects.get(id=validated_data['verification_state'])
            
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
    
    class Meta:
        model = Review
        fields = ['id','code', 'comment', 'created_at', 'rating', 'owner']
    
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
        fields = '__all__'

# ReportSerializer
# -----------------
class ReportSerializer(serializers.ModelSerializer):
    reporter = serializers.ReadOnlyField(source='reporter.username')
    reported_object = serializers.SerializerMethodField()

    class Meta:
        model = Report
        fields = [
            'id', 
            'created_at', 
            'code', 
            'reporter',
            'reported_content_type',
            'reported_object_id',
            'reported_object', 
            'category', 
            'content', 
            'resolved'
        ]
        read_only_fields = ['reporter']

    def create(self, validated_data):
        if 'code' not in validated_data or not validated_data['code']:
            validated_data['code'] = generate_code()
        
        return super().create(validated_data)

    def get_reported_object(self, obj):
        content_type = obj.reported_content_type.model_class()
        try:
            reported_object = content_type.objects.get(id=obj.reported_object_id)
            if isinstance(reported_object, Post):
                return PostSerializer(reported_object).data
            elif isinstance(reported_object, Review):
                return ReviewSerializer(reported_object).data
            elif isinstance(reported_object, User):
                return SensibleUserSerializer(reported_object).data
            else:
                return None
        except content_type.DoesNotExist:
            return None
        
# ValorationSerializer
# ---------------------
class ValorationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    
    class Meta:
        model = Valoration
        fields = ['id', 'review', 'user', 'valoration']
        read_only_fields = ['user']

    def create(self, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            validated_data['user'] = request.user
        
        if Valoration.objects.filter(review=validated_data['review'], user=validated_data['user']).exists():
            raise serializers.ValidationError('You have already valued this review')
        
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            validated_data['user'] = request.user
            
        if instance.user != validated_data['user']:
            raise serializers.ValidationError('You cannot modify the valoration of another user')
        
        return super().update(instance, validated_data)
        
class ContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = ['id', 'app_label', 'model']