# Dockerfile para Django (backend)
FROM python:3.12.2-slim

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y build-essential libpq-dev && apt-get clean && rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo de requisitos y instalar dependencias de Python
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código de la aplicación, incluido manage.py
COPY . .

# Exponer el puerto que usará Django
EXPOSE 8000

# Comando para ejecutar el servidor de desarrollo de Django
CMD ["sh", "-c", "python argy_reviews/manage.py migrate && gunicorn argy_reviews.wsgi:application --bind 0.0.0.0:8000"]
