# Guia para desarrollo de las interacciones
Este documento tiene como proposito guiar al desarrollador en la utilizacion del servicio REST que ofrece Argy Reviews. A continuacion se enunciaron los puntos clave para poder realizar correctamente las solicitudes.
# Funcionamiento general de la API
El servicio consta de una url base para todos los endpoints de la aplicacion.

La URL base sera `http://localhost:8000` en caso de estar utilizando la aplicacion __localmente__. En cambio, si se esta utilizando el servicio desde el dominio web, la URL base sera `https://argy-reviews-production.up.railway.app`.

A continuacion se dara una lista de __enpoints__ que se consideran indispensables para poder llevar a cabo las interaciones del proyecto.

Dependiendo de la ruta y el meotodo al que se quiera hacer la peticion se debera estar o no [autenticado](auth.md) 
 
Cada uno de los puntos viene con una breve explicacion del funcionamiento general de la view, ejemplos en formato `json` de lo que se espera como `request` y que se espera como `response`una descripcion de cada metodo de cabezara HTTPS y la URL que se debera agregar a la URL base. 

Algunas de las views __no seran necesarias__ dependiendo de como se haya planteado en primer lugar la interaccion. 

## Publicaciones
Esta seccion tratara todas las views relacionadas con las publicaciones (`posts`). 

:::argy_reviews.api.views
    options:
        members:
            - post_list

??? question "GET"
    - **Descripcion** Lista todas las publicaciones.
    - **Requiere autenticación**: No
    
    Este `json` es un ejemplo de lo que se obtendra como `response` al llamar alguno de los endpoints relacionados a las publicaciones.
    ```json
    [
        {
        "id": 7,
        "title": "Una publicacion",
        "content": "Un contenido de la publicacion",
        "created_at": "2025-02-10T23:03:57.735353Z",
        "code": "MGF1RITM",
        "avg_ratings": 2.1,
        "owner": 1,
        "verification_state": 1,
        "categories": [
            {
                "id": 1,
                "name": "Tecnología"
            },
            {
                "id": 4,
                "name": "Servicios"
            },
            {
                "id": 5,
                "name": "Fitness"
            },
            {
                "id": 6,
                "name": "Restaurantes"
            }
        },
        {
        "id": 8,
        "title": "Una publicacion",
        "content": "Un contenido de la publicacion",
        "created_at": "2025-02-10T23:03:57.735353Z",
        "code": "MGF1RITM",
        "avg_ratings": 3.0,
        "owner": 1,
        "verification_state": 1,
        "categories": [
            {
                "id": 1,
                "name": "Tecnología"
            }
        ]
        }
    ]
    ```
    
??? success "POST"
    - **Descripción**: Crea una nueva publicacion.
    - **Requiere autenticación**: Sí
    
    Los atributos minimos y necesarios para poder hacer una publicación son:
    ```json
        {
            "title": "Título de la publicación",
            "description": "Descripción de la publicación",
        }
    ```
    Atributos como `code`, `owner`, `verification_state`, `avg_rating`y `created_at` son generados automáticamente; `categories` es un atributo opcional que se utiliza para realizar filtros en la busqueda de publicaciones.

:::argy_reviews.api.views
    options:
        members:
            - post_detail


??? question "GET"
    - **Descripcion** Recupera los detalles de una publicación específica.
    - **Requiere autenticación**: No
    ```json
    {
        "id": 7,
        "title": "Una publicacion",
        "content": "Un contenido de la publicacion",
        "created_at": "2025-02-10T23:03:57.735353Z",
        "code": "MGF1RITM",
        "avg_ratings": 0.0,
        "owner": 1,
        "verification_state": 1,
        "categories": [
            {
                "id": 1,
                "name": "Tecnología"
            },
            {
                "id": 4,
                "name": "Servicios"
            },
            {
                "id": 5,
                "name": "Fitness"
            },
            {
                "id": 6,
                "name": "Restaurantes"
            }
        ]
    }
    ```
    
??? note "PUT"
    - **Descripción**: Actualiza los detalles de una publicación específica.
    - **Requiere autenticación**: Sí
    - **Requiere ser owner**: Sí
    
    Es un metodo __PUT__, eso quiere decir que para actualizar una publicación se debe enviar un `json` con todos los datos __obligatorios__ de manera completa. 
    
    ```json
    {
        "title": "Título de la publicación",
        "description": "Descripción de la publicación",
    }
    ```

??? failure "DELETE"
    - **Descripción**: Elimina una publicación específica.
    - **Requiere autenticación**: Sí
    - **Requiere ser owner**: Sí
    
    Enviar la solicitud con el metodo en la cabecera bastara para eliminar la publicacion.

## Reseñas
Esta seccion tratara todas las views relacionadas con las reseñas (`reviews`). 


:::argy_reviews.api.views
    options:
        members:
            - reviews_list

??? question "GET"
    - **Descripcion** Lista todas las reseñas.
    - **Requiere autenticación**: No
    
    Este `json` es un ejemplo de lo que se obtendra como `response` al llamar alguno de los endpoints relacionados a las reseñas.
    ```json
    [
        {
            "id": 16,
            "code": "S50EKE88",
            "comment": "Buenas publicacion!",
            "created_at": "2025-02-11T01:55:01.114071Z",
            "rating": 5,
            "owner": 1
        },
        {
            "id": 18,
            "code": "MZ9FMN95",
            "comment": "Maso menos.",
            "created_at": "2025-02-11T01:55:38.862715Z",
            "rating": 3,
            "owner": 2
        },
        {
            "id": 17,
            "code": "J58UQOFV",
            "comment": "Muy mal!",
            "created_at": "2025-02-11T01:55:21.622624Z",
            "rating": 1,
            "owner": 3
        }
    ]
    ```
    
??? success "POST"
    - **Descripción**: Crea una nueva reseña.
    - **Requiere autenticación**: Sí
    
    Los atributos minimos y necesarios para poder hacer una reseña son:
    ```json
        {
            "comment": "Comentario",
            "rating": 3
        }
    ```
    El atributo `rating` es un valor entre 1 y 5, este debe ser entero.
        
:::argy_reviews.api.views
    options:
        members:
            - review_detail


??? question "GET"
    - **Descripcion** Recupera los detalles de una reseña específica.
    - **Requiere autenticación**: No
    ```json
    {
        "id": 18,
        "code": "MZ9FMN95",
        "comment": "Maso menos.",
        "created_at": "2025-02-11T01:55:38.862715Z",
        "rating": 3,
        "owner": 2
    }
    ```
    
??? note "PUT"
    - **Descripción**: Actualiza los detalles de una publicación específica.
    - **Requiere autenticación**: Sí
    - **Requiere ser owner**: Sí
    
    Es un metodo __PUT__, eso quiere decir que para actualizar una publicación se debe enviar un `json` con todos los datos __obligatorios__ de manera completa. 
    
    ```json
    {
        "comment": "Comentario",
        "rating": 3,
    }
    ```
    De todas formas, lo mas recomednable es hacer un DELETE y volver a crear la reseña.

??? failure "DELETE"
    - **Descripción**: Elimina una reseña específica.
    - **Requiere autenticación**: Sí
    - **Requiere ser owner**: Sí
    
    Enviar la solicitud con el metodo en la cabecera bastara para eliminar la publicacion.
        
  
# Imagenes
:::argy_reviews.api.views
    options:
        members:
            - image_upload


??? question "GET"
    - **Descripcion** Lista todas las imaagenes.
    - **Requiere autenticación**: No
    
    Este `json` es un ejemplo de lo que se obtendra como `response` al llamar alguno de los endpoints relacionados a las imagenes.
    ```json
    [
        {
            "id": 3,
            "image": "/media/images/descarga_1.jpg",
            "post": 3
        }
    ]
    ```

??? success "POST"
    - **Descripción**: Crea una nueva reseña.
    - **Requiere autenticación**: Sí
    
    Para poder subir una imagen se deber enviar un `form-data`, ya que se trata de un archivo. En este deben estar los campos `image` y `post`. El campo `image` debe contener un archivo.
