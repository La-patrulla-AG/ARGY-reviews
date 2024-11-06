from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Review, Post

@receiver(post_save, sender=Review)
def update_post_avg_rating_on_save(sender, instance, **kwargs):
    post = instance.post
    post.update_avg_ratings()

@receiver(post_delete, sender=Review)
def update_post_avg_rating_on_delete(sender, instance, **kwargs):
    post = instance.post
    post.update_avg_ratings()