from rest_framework import permissions
from .models import UserProfile

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
            profile = UserProfile.objects.filter(user=request.user).first()
            if profile and profile.is_currently_banned():
                return False
        return True
