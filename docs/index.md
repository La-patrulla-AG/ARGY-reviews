# Getting started
El proposito general de esta documentacion es guiar al desarrollador para poder levantar la aplicacion web de Argy Reviews. A continuacion se otorgaran varios metodos para poder realizar esto con exito.

Antes que nada se debe clonar la rama principal del repositorio de Argy Reviews.
```bash
git clone https://github.com/La-patrulla-AG/ARGY-reviews.git
```

## Levantar con docker-compose
La forma mas sencilla y rapida de levantar el proyecto es a traves de Docker. Las configuraciones necesarias fueron hechas de ante mano para que el proyecto sea funcional con tan solo un solo comando de la consola. 

El unico requerimiento para procede es tener instalado [Docker desktop](https://www.docker.com/products/docker-desktop/) o algun motor de Docker en la pc.Una ves que Docker exista en su computadora, este debera estar encendido y corriendo. 

Ejecutando el siguiente comando en la raíz del proyecto (donde se encuentra el archivo `docker-compose.yml`) se crearan las imagenes con todas las dependencias correspondientes y se levantaran un contendor con estas corriendo.
```bash
docker-compose up --build
```
![Si tiene Docker desktop deberia verse asi:](https://i.imgur.com/za2mOgv.png)

## Dependencias locales
Si desea instalar todos los requerimientos de manera local estos son los pasos a seguir.


### Django
__Se intuye que Python esta instalado localmente.__

Para poder utilizar Django y levantar el servidor con todos los servicios que este ofrece primero debemos tener `Django` instalado localmente y todas la dependencias que este incluye tales como `rest-framework`. Afortunadamente esto esta facilitado a traves de el `venv`, que nos permiten virtualizar todas las dependencias necesarias solamente para este proyecto.

>[!DANGER] venv y .gitignore
>La carpeta de `venv` es __solamente__ propia del desarrollador; por nada deben commitearse los cambios dentro de esta carpeta o pushearse al repositorio remoto.
>Por esta razon existe un `.gitignore` que evita que los cambios en esta area sea agregen a stage (o se deban estar excluyendo y seleccionando uno por uno).

Para poder utilizar `venv` e instalar todas las dependencias debemos levantar el entorno virtual e instalar todos los requerimientos detallado en `requirements.txt`. A continuacion una breve guia para hacerlo:

1. Instala venv para poder utilizar el entorno virtual.
    ```bash
    pip install virtualenv
    ```
2. Creamos el entorno virtual.
    ```bash
    python -m venv venv
    ```
3. Activamos el entorno virtual (debe encontrarse dentro del directorio donde `venv` se encuentra).
    ```bash
    venv\Scripts\activate
    ```
4. Instalamos las dependencias. Esto lo haremos a traves de `requirements.txt`, donde estan
    ```bash
    pip install -r requirements.txt
    ```

Si en algun momento se agregan dependencias al proyecto y se desea actualizar los requerimientos utilize:
```bash
pip freeze > requirements.txt
```

> [!WARNING]
> Puede que el sistema no tenga habilitada la ejecucion de scripts. Para solucionarlo ebes abrir PowerShell con privilegios de administrador y cambiar la politica de ejecucion.
>   ```powershell
>   Set-ExecutionPolicy RemoteSigned
>   ```



### Frontend setup
```PowerShell
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression 
fnm use --install-if-missing 20
```
Ahora si reseteas la consola deberias poder usar npm, pero si no podes proba esto:
```PowerShell
Test-Path $PROFILE
New-Item -Path $PROFILE -Type File -Force
notepad $PROFILE
fnm env --use-on-cd | Out-String | Invoke-Expression
```
### Node modules step by step
Desde el directorio `Argy-reviews\argy-reviews\frontend\`:
```powershell 
npm init -y
npm install
npm run dev
```
