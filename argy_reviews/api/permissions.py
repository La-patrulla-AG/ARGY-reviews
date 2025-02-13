from rest_framework import permissions
from .models import BanStatus
from rest_framework_simplejwt.authentication import JWTAuthentication
class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user

class IsStaffUser(permissions.BasePermission):
    """
    Custom permission to only allow staff users to access the view.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_staff
    
class IsNotBanned(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            profile = BanStatus.objects.filter(user=request.user).first()
            if profile and profile.is_currently_banned():
                return False
        return True
class OptionalJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Obtener el header de autorización
        header = self.get_header(request)
        if header is None:
            # Si no se envía token, retornamos None
            return None

        try:
            return super().authenticate(request)
        except Exception as e:
            # En métodos GET (o los que definas como públicos) se permite el acceso anónimo
            if request.method == "GET":
                return None
            # En otros métodos se vuelve a levantar el error para que el usuario no autenticado no acceda
            raise e