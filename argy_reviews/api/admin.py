from django.contrib import admin
from .models import *
from django.contrib.contenttypes.models import ContentType

# Filtro personalizado para ContentType
class ContentTypeFilter(admin.SimpleListFilter):
    title = 'content type'  # Nombre del filtro en la interfaz
    parameter_name = 'content_type'  # Parámetro usado en la URL del filtro

    def lookups(self, request, model_admin):
        """Define las opciones que se mostrarán en el filtro."""
        content_types = ContentType.objects.filter(
            id__in=Report.objects.values_list('reported_content_type_id', flat=True)
        )
        return [(ct.id, ct.model.capitalize()) for ct in content_types]

    def queryset(self, request, queryset):
        """Filtra los resultados basados en la opción seleccionada."""
        if self.value():
            return queryset.filter(reported_content_type_id=self.value())
        return queryset


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('code', 'reporter', 'reported_object', 'category', 'resolved', 'created_at')
    list_filter = (ContentTypeFilter, 'resolved', 'created_at')  # Agrega el filtro personalizado
    search_fields = ('code', 'reporter__username', 'content')  # Para buscar reportes específicos
    date_hierarchy = 'created_at'  # Navegación jerárquica por fechas

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ( 'title', 'id', 'owner', 'verification_state__name', 'created_at')
    list_filter = ('verification_state__name', 'created_at')
    search_fields = ('code', 'owner__username')
    date_hierarchy = 'created_at'

class StudentAdmin(admin.ModelAdmin):
    filter_horizontal = ('courses',)


# Registro de otros modelos

admin.site.register(PostCategory)
admin.site.register(Review)
admin.site.register(PostState)
admin.site.register(ReportCategory)
admin.site.register(PostImage)
admin.site.register(UserProfile)
admin.site.register(Valoration)