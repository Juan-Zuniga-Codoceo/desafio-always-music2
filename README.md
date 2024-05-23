Always Music - Sistema de Gestión de Estudiantes
Este proyecto es una solución para el desafío de Always Music, que consiste en crear un sistema de gestión de estudiantes utilizando Node.js y PostgreSQL. El sistema permite agregar, consultar, actualizar y eliminar estudiantes en la base de datos.

## Requisitos
Node.js
PostgreSQL
## Instalación
1. Clona el repositorio:

    git clone https://github.com/tu_usuario/always_music.git
    cd always_music

2. Instala las dependencias:

npm install

## Uso

## Agregar un estudiante
Para agregar un estudiante, ejecuta el siguiente comando:

node index.js agregar "Nombre del Estudiante" "RUT" "Curso" Nivel

## Consultar todos los estudiantes
Para consultar todos los estudiantes registrados, ejecuta el siguiente comando:

node index.js consultar_todos

## Consultar un estudiante por RUT
Para consultar un estudiante por su RUT, ejecuta el siguiente comando:

node index.js consultar "RUT"

## Actualizar un estudiante
Para actualizar la información de un estudiante, ejecuta el siguiente comando:

node index.js actualizar "Nombre del Estudiante" "RUT" "Nuevo Curso" NuevoNivel

## Eliminar un estudiante
Para eliminar un estudiante por su RUT, ejecuta el siguiente comando:

node index.js eliminar "RUT"

## Estructura del Proyecto
    config/db.js: Configuración de la conexión a la base de datos.
    queries/students.js: Funciones CRUD para interactuar con la tabla estudiantes.
    index.js: Manejo de los comandos de línea de comandos para realizar operaciones CRUD.
    .env: Archivo de configuración de variables de entorno.

## Captura de Errores
Todas las consultas a la base de datos están encapsuladas en bloques try...catch para capturar e imprimir errores en la consola.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.# desafio-always-music2
