# Estilos del codigo en python
En Python, existen convenciones de estilo bien definidas para nombrar funciones, variables y clases, que siguen las recomendaciones del **PEP 8**, la guía oficial de estilo para Python. Aquí te explico cómo se deben nombrar:

## Nombres de Variables y Funciones

Las variables y funciones deben usar **minúsculas** y separar las palabras con guiones bajos (`_`). Este estilo es conocido como **snake_case**.
  

    ```python
    # Variables
    total_price = 100
    user_name = "John"
    
    # Funciones
    def calculate_total(price, tax):
        return price + tax
    ```

El uso de guiones bajos hace que los nombres sean más legibles, especialmente cuando hay varias palabras.

## Nombres de Clases

Las clases deben seguir el estilo **CamelCase** (también llamado PascalCase), donde cada palabra comienza con una **mayúscula** y no hay guiones bajos entre ellas.

    ```python
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

    class UserProfile:
        def display_info(self):
            print(self.name, self.age)
    ```

Este estilo se utiliza para diferenciar claramente las clases de las funciones y variables, lo que hace que el código sea más legible.

## Nombres de Constantes

Las constantes se nombran con **mayúsculas** y guiones bajos para separar las palabras. Aunque Python no tiene constantes "verdaderas", es una convención usar este estilo para indicar que un valor no debe ser modificado.
  

    ```python
    MAX_CONNECTIONS = 5
    PI = 3.14159
    TIMEOUT_SECONDS = 30
    ```

El uso de mayúsculas ayuda a resaltar que estos valores son constantes y no deberían cambiar durante la ejecución del programa.

## Nombres de Módulos y Paquetes

Los nombres de módulos y paquetes (archivos `.py` y carpetas que contienen código) deben estar en **minúsculas** y evitar el uso de guiones bajos a menos que sea absolutamente necesario. Esto aplica tanto a módulos individuales como a paquetes.
  

    ```plaintext
    mymodule.py
    utils.py
    data_processing/
    ```

## Métodos Privados o Variables Internas

Si una función o variable está destinada a ser privada o de uso interno dentro de una clase o módulo, se debe comenzar su nombre con un guion bajo (`_`).
  

    ```python
    class MyClass:
        def __init__(self):
            self._internal_variable = 42

        def _helper_method(self):
            return "Helper function"
    ```

Esta convención indica que el nombre no está destinado a ser usado fuera de su clase o módulo, aunque no lo prohíbe explícitamente.

## Métodos Mágicos o Especiales

Python tiene varios **métodos mágicos o especiales** que comienzan y terminan con doble guion bajo, como `__init__`, `__str__`, y `__repr__`. Estos nombres son reservados por Python y no deben usarse para otros fines.
  

    ```python
    class MyClass:
        def __init__(self, value):
            self.value = value

        def __str__(self):
            return f"MyClass with value {self.value}"
    ```

Los métodos mágicos son parte del comportamiento interno de Python, y los dobles guiones bajos ayudan a diferenciarlos de métodos y funciones regulares.
