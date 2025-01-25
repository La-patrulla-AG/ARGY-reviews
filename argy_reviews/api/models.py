from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model  # This is the default user model provided by Django
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

# TODO 
# - [x] Create a model for the Report
# - [x] Create a view to list all the reports
# - [x] Create a model for Category
# - [x] Create a category relation with the Post model
# - [x] Make the code of all the models that have coude automatically generated
# - [x] Make a way to store images in the Post model
# - [x] Make the avg_rating automatically updated when a review is created, updated or deleted
# - [x] Create a model for the PostState
# - [x] Create a relation between the Post and the PostState
# - [x] Make a way to report a post, a review or a user
# - [x] Make a ReportCategory model
# - [x] Solamente puede haber una review por usuario en un post
# - [x] Solamente puede haber un reporte por usuario en un post, review o usuario
# - [x] Se debe actualizar dinamicamente el avg_rating de los post cuando hay CUD

"""Funciones auxiliares"""
# No se deben hacer consultas a la base de datos desde los modelos, 
# solamente se deben hacer consultas desde las vistas o desde los serializadores.

"""Modelos de la aplicación"""

#UserProfile model
class UserProfile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    
    def __str__(self):
        return self.user.username

# PostState model
# ---------------
class PostState(models.Model):
    name = models.CharField(max_length=20, unique=True)

# Post model
# ----------
class Post(models.Model):
    code = models.CharField(max_length=10, unique= True, blank=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    avg_ratings = models.FloatField(default=0, blank=True)
    owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE,blank=True, null=True)
    categories = models.ManyToManyField('PostCategory', related_name='posts', blank=True)
    verification_state = models.ForeignKey(PostState, on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return self.title

    def get_reviews(self):
        return Review.objects.filter(post=self)
    
    def update_avg_ratings(self):
        reviews = self.review_set.all()
        if reviews.exists():
            self.avg_ratings = reviews.aggregate(models.Avg('rating'))['rating__avg']
        else:
            self.avg_ratings = 0
        self.save()

# PostImage model
# ---------------
class PostImage(models.Model):
    post = models.ForeignKey(Post, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"Image for post: {self.post.title}"
    
# Review model
# ------------
class Review(models.Model):
    code = models.CharField(max_length=10, unique= True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(null=False, blank=False)
    comment = models.TextField(null=True, blank=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    owner = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE, blank=True, null=True)
    
    class Meta:
        unique_together = ('post', 'owner') 
    
    def save(self, *args, **kwargs):
        
        # if not self.code:
        #     self.code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        
        if not self.pk and not self.owner:
            user_id = kwargs.pop('user_id', None)
            if user_id:
                self.owner = get_user_model().objects.get(pk=user_id)

        super().save(*args, **kwargs)
        
    def __str__(self):
        return self.owner.username

# Valorations
# -----------
class Valoration(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    valoration = models.BooleanField(default=True)
    
    class Meta:
        unique_together = ('review', 'user')
        
    def __str__(self):
        return f"{self.user.username} valoration for {self.review.owner.username}"

# Category model
# --------------     
class PostCategory(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

# Report model
# ------------
class Report(models.Model):
    """
    This model is made to report something inapropiated 
    or bad in a post, a review or a user.
    
    The report can be an elaborated argument about the issue or 
    a pre-made category of the issue.
    """  
    
    created_at = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=10, unique=True, blank=True)
    reporter = models.ForeignKey('auth.User', related_name='reports', on_delete=models.CASCADE, blank=True, null=True)
    reported_content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    reported_object_id = models.PositiveIntegerField()
    reported_object = GenericForeignKey('reported_content_type', 'reported_object_id')
    category = models.ForeignKey('ReportCategory', on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField(blank=True, null=True)
    resolved = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Report by {self.reporter} on {self.reported_object}"  

# ReportCategory model
# ---------------------
class ReportCategory(models.Model):
    name = models.CharField(default="ALGo",max_length=30)
    description = models.CharField(max_length=200,blank=True, null=True)

    def __str__(self):
        return self.name

