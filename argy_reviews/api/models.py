from django.db import models
from django.contrib.auth.models import User #This is the default user model provided by Django
from django.utils import timezone
from django.contrib.auth import get_user_model
import string, random

# Create your models here.

# TODO 
# - [x] Create a model for the Report
# - [] Makle a way to report a post, a review or a user
# - [] Create a view to list all the reports
# - [] Create a model for Category
# - [] Create a category relation with the Post model
# - [x] Make the code of all the models that have coude automatically generated
# - [] Make a way to store images in the Post model
# - [] Make the avg_rating automatically updated when a review is created, updated or deleted

# class ImageModel(models.Model):
#     image = models.ImageField(upload_to='images/')

#     def __str__(self):
#         return self.image.url

class Post(models.Model):
    code = models.CharField(max_length=10, unique= True, blank=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    avg_ratings = models.FloatField(default=0, blank=True)
    owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE,blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    
    # def save(self, *args, **kwargs):
        
    #     if not self.code:
    #         self.code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        
    #     if not self.pk and not self.owner:
    #         user_id = kwargs.pop('user_id', None)
    #         if user_id:
    #             self.owner = get_user_model().objects.get(pk=user_id)

    #     super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title

    def get_reviews(self):
        return Review.objects.filter(post=self)
    

    def update_avg_ratings(self):
        ratings = self.get_ratings()
        if ratings.exists():
            self.avg_ratings = ratings.aggregate(models.Avg('value'))['value__avg']
            self.save()

class Review(models.Model):
    code = models.CharField(max_length=10, unique= True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(null=False, blank=False)
    comment = models.TextField(null=True, blank=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    owner = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE, blank=True, null=True)
    
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


class Report(models.Model):
    code = models.CharField(max_length=10, unique= True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    content = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='reports', on_delete=models.CASCADE, blank=True, null=True)  

    def __str__(self):
        return self.owner.username

    def save(self, *args, **kwargs):
        
        if not self.code:
            self.code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        
        if not self.pk and not self.owner:
            user_id = kwargs.pop('user_id', None)
            if user_id:
                self.owner = get_user_model().objects.get(pk=user_id)

        super().save(*args, **kwargs)