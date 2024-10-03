# ARGY-reviews
Projecto de desarrollo de software

# Django
## Getting started
Si intuye que Python esta instalado localmente.

Pa poder utilizar Django y levantar el servidor con todos los servicios que este ofrece primero debemos tener `Django` instalado localmente y todas la dependencias que este incluye tales como `rest-framework`. Afortunadamente esto esta facilitado a traves de el `venv`, que nos permiten virtualizar todas las dependencias necesarias solamente para este proyecto.

Para poder utilizar venv e intalar todas las dependencias debemos levantar el entorno virtual e instalar todos los requerimientos detallado en `requirements.txt`. A continuacion una breve guia para hacerlo:

1. Instala venv para poder utilizar el entorno virtual.
    ```bash
    pip install virtualenv
    ```
2. Activamos el entorno virtual (debe encontrarse dentro del directorio donde `venv` se encuentra).
    ```bash
    venv\Scripts\activate
    ```
3. Instalamos las dependencias. Esto lo haremos a traves de `requirements.txt`, donde estan
    ```bash
    pip install -r requirements.txt
    ```

Si en algun momento se agregan dependencias al proyecto y se desea actualizar los requerimientos utilize:
```bash
pip freeze > requirements.txt
```