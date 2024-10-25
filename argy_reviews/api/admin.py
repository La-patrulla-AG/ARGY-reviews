from django.contrib import admin
from .models import *

# Register your models here.

class StudentAdmin(admin.ModelAdmin):
    filter_horizontal = ('courses',)

admin.site.register(Post)
admin.site.register(Category)