"""
Django settings for argy_reviews project.
"""

import os
from pathlib import Path
import dj_database_url
from dotenv import load_dotenv

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG=True

ALLOWED_HOSTS = [
    '127.0.0.1', 
    'localhost', 
    'https://argy-reviews-production.up.railway.app', 
    'argy-reviews-production.up.railway.app'
]

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'  # Ejemplo: smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')

# Application definition

INSTALLED_APPS = [
    'drf_spectacular',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig',
    'frontend.apps.FrontendConfig',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'dj_rest_auth',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'API de ArgyReviews',
    'DESCRIPTION': 'Argy reviews permite al usuario realizar reseñas de productos y servicios.',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    # OTHER SETTINGS
}

CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:3000",  # Frontend en React
    "http://localhost:3000", 
    'https://argy-reviews-production.up.railway.app',
]

CSRF_TRUSTED_ORIGINS = ['https://argy-reviews-production.up.railway.app']

CORS_ALLOW_ALL_ORIGINS = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',    
    'api.middleware.BanCheckMiddleware',
]

ROOT_URLCONF = 'argy_reviews.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'argy_reviews.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
    
    # 'default': {
    #     'ENGINE': 'django.db.backends.postgresql',
    #     'NAME': 'ArgyReviews',
    #     'USER': 'grupo11',
    #     'PASSWORD': 'meestanqueseando',
    #     'HOST': 'colosal.duckdns.org',  # Dirección IP o dominio del servidor
    #     'PORT': '14998',  # El puerto de PostgreSQL, normalmente es el 5432
    # }
    # 'default': {
    #     'ENGINE': 'django.db.backends.postgresql',
    #     'NAME': os.getenv('DATABASE_NAME', 'default_db_name'),
    #     'USER': os.getenv('DATABASE_USER', 'default_user'),
    #     'PASSWORD': os.getenv('DATABASE_PASSWORD', 'default_password'),
    #     'HOST': os.getenv('DATABASE_HOST', 'localhost'),
    #     'PORT': os.getenv('DATABASE_PORT', '5432'),
    # }
}


POSTGRES_LOCALLY = True
if POSTGRES_LOCALLY == True:
    DATABASES['default'] = dj_database_url.config(default=os.getenv('DATABASE_URL'))


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_AUTH = {
    'USE_JWT': True,
    'JWT_AUTH_COOKIE': 'argy_reviews_jwt',
    'JWT_AUTH_REFRESH_COOKIE': 'argy_reviews_jwt_refresh'
}

LOGIN_URL = 'https://argy-reviews-production.up.railway.app'  # Cambia esto por la ruta correcta