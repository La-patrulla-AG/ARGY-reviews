from django.http import HttpResponseForbidden
from django.utils import timezone
from .models import BanStatus

class BanCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            profile = BanStatus.objects.filter(user=request.user).first()
            if profile and profile.is_currently_banned():
                return HttpResponseForbidden("You are banned.")
        return self.get_response(request)