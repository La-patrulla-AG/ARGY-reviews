FROM python:3.10-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir django

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
