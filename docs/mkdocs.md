# MkDocs
MkDocs es la herramienta que utilizaremos para crear la documentacion del proyecto.

Consiste de un python package que nos permite jerarquizar y dividir los distintos doicumentos en una pagina web con distintos estilos y funcionalidades.

>[!TIP] MkDocs package
>Conste que MkDocs ya se encuentra dentro de las dependencias del entorno virtual en `requeriments.txt` asi que solamente es necesario [inicializarlo](./getting_started.md#virtual-invorement).

## Estructura
La estructura de directorios básica se verá así:
```bash
my-project-docs/
    mkdocs.yml    # Archivo de configuración principal
    docs/
        index.md  # Archivo principal de la documentación
```

- Dentro de la capeta `\docs` se encuentran todos los documentos enformato __markdown__.
- El archivo de configuración `mkdocs.yml` es donde se define el comportamiento y las opciones del sitio de documentación.

## Previsualizacion local
Para ver cómo se verá tu documentación en el navegador mientras la editas, MkDocs tiene un servidor local que te permite previsualizar los cambios en tiempo real.

Ejecuta el siguiente comando en la raíz del proyecto (donde está el archivo mkdocs.yml):

```bash
mkdocs serve
```

## Construir la Documentación
Cuando estés listo para desplegar tu documentación, puedes construir el sitio estático. Esto generará un conjunto de archivos HTML que pueden ser subidos a un servidor web o a un servicio de hosting de documentación como GitHub Pages.

Para construir el sitio, ejecuta:
```bash
mkdocs build
```