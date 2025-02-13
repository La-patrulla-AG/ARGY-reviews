from django.contrib import admin
from .models import *
from django.contrib.contenttypes.models import ContentType
from django.utils.html import format_html
from django.urls import reverse


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
    list_display = ('linked_reported_object','reporter',  'category', 'resolved', 'created_at')
    list_filter = (ContentTypeFilter, 'resolved', 'created_at')  # Agrega el filtro personalizado
    search_fields = ('code', 'reporter__username', 'content')  # Para buscar reportes específicos
    date_hierarchy = 'created_at'  # Navegación jerárquica por fechas
    list_editable = ('resolved',)  # Hace editable el campo "resolved" directamente en la lista

    def linked_reported_object(self, obj):
        """Genera un enlace al objeto reportado en la interfaz de administrador."""
        if obj.reported_object:
            # Obtén el modelo y la URL del objeto reportado
            content_type = obj.reported_content_type
            object_id = obj.reported_object_id
            admin_url = reverse(
                f'admin:{content_type.app_label}_{content_type.model}_change',
                args=[object_id]
            )
            return format_html('<a href="{}">{}</a>', admin_url, obj.reported_object)
        return "N/A"

    linked_reported_object.short_description = "Reported Object"  # Título para la columna en el admin



@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'owner', 'verification_state__name', 'created_at')
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
admin.site.register(Trabajador)
admin.site.register(Profesion)
admin.site.register(Solicitud)
admin.site.register(BanStatus)
admin.site.register(Valoration)
