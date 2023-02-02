![HenryGames](https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/HenryGamesPNG.PNG?alt=media&token=1a499da4-cf8c-4a44-88a4-3353a1b913da)

# Individual Project - Henry Videogames
## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.

## Tecnologías

- __React JS__
- __React-Router-Dom__
- __Redux__
- __NodeJS__
- __PostgresSQL__
- __Sequelize__

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

- Buscar videjuegos
- Filtrarlos / Ordenarlos
- Agregar nuevos videojuegos

__IMPORTANTE__: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando `?key={YOUR_API_KEY}` al final de cada endpoint. Agregar la clave en el archivo `.env` para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

- GET <https://api.rawg.io/api/games>
- GET <https://api.rawg.io/api/games?search={game}>
- GET <https://api.rawg.io/api/genres>
- GET <https://api.rawg.io/api/games/{id}>

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__:
![HenryGames](https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/HenryGamesPNG.PNG?alt=media&token=1a499da4-cf8c-4a44-88a4-3353a1b913da)

__Ruta principal__:
![HenryGames](https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/HenryGamesHome.PNG?alt=media&token=42da76fc-d9eb-4e8b-b29e-c688a7f65680)

__Ruta de detalle de videojuego__:
![HenryGames](https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/HenryGamesDetail.PNG?alt=media&token=697275c6-975f-4796-818e-c0ec23d20baa)

__Ruta de creación de videojuegos__:
![HenryGames](https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/HenryGamesCreate.PNG?alt=media&token=8fc549da-355e-435d-b02b-9e02e8ce627a)


## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Videojuego con las siguientes propiedades:
  - ID: * No puede ser un ID de un videojuego ya existente en la API rawg
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- [ ] Genero con las siguientes propiedades:
  - ID
  - Nombre

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /videogames__:
  - Obtener un listado de los videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] __POST /videogames__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos, relacionado a sus géneros.
- [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
