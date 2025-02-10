FROM python:3.12.2-alpine

RUN apk update && apk add --no-cache build-base libpq-dev

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python argy_reviews/manage.py makemigrations && python argy_reviews/manage.py migrate && python argy_reviews/manage.py collectstatic --noinput && python argy_reviews/manage.py runserver"]