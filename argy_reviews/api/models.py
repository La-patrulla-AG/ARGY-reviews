from django.db import models
from django.contrib.auth.models import User #This is the default user model provided by Django
from django.utils import timezone
from django.contrib.auth import get_user_model

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=10)
    avg_ratings = models.FloatField(default=0)
    owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE,blank=True, null=True)
    image_url = models.URLField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return self.title

    def get_reviews(self):
        return Review.objects.filter(post=self)
    
    def save(self, *args, **kwargs):
        if not self.pk and not self.owner_id:
            self.owner = get_user_model().objects.get(pk=kwargs.pop('user_id'))
        super().save(*args, **kwargs)

    def update_avg_ratings(self):
        ratings = self.get_ratings()
        if ratings.exists():
            self.avg_ratings = ratings.aggregate(models.Avg('value'))['value__avg']
            self.save()

class Review(models.Model):
    code = models.CharField(max_length=10, default='0000000000')
    created_at = models.DateTimeField(default=timezone.now)
    rating = models.IntegerField(default=1)
    comment = models.TextField(null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    owner = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.owner.username

    def save(self, *args, **kwargs):
        if not self.pk and not self.owner_id:
            self.owner = get_user_model().objects.get(pk=kwargs.pop('user_id'))
        super().save(*args, **kwargs)