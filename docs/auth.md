# Guia de autenticacion de interacciones
En esta guia se mostrara al desarrollador de las interacciones como lograr autenticarse para poder hacer uso de los servicios REST de argy Reviews.

Argy Reviews utiliza __JWT__ (JSON Web Token) como metodo de autenticacion. JWT otorga dos tokens distintos: 
- `access_token` que permite al usuario realizar peticiones al servidor en aquellas rutas que lo pidan. El token tiene un tiempo de validez, que una ves expirado, este deja de ser valido.
- `refresh_token` que permite refrescar el tiempo de validez del `access_token` otrorgandole al usuario uno nuevo. Este token tambien tiene una fecha de expiracion, una ves finalizado el usuario debera logearse nuevamente.

## Obtencion del token
Primero se debera crear un usuario desde el endpoint `/register/` o desde el la aplicacion web.
:::argy_reviews.api.views
    options:
        members:
            - register

Luego se debera acceder a `/token/`, donde se colocaran los datos del usuario y se obtendran el `access_token` y el `refresh_token`.

```json
{
    "username":"username",
    "password":"password123"
}
```

## Refrescar token
En caso de que el `access_token` expire se podra obtener uno nuevo mediante `/token/refresh/`.
```json
{
    "refresh":<refresh_token>
}
```
