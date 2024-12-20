from django.contrib import admin
from .models import *

# Register your models here.

class StudentAdmin(admin.ModelAdmin):
    filter_horizontal = ('courses',)

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Report)
admin.site.register(PostState)
admin.site.register(ReportCategory)