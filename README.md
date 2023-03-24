# Prueba técnica IpGlobal

Buenas!

Antes de nada, un placer!

Ahora mismo el desarrollo de la aplicación estaría completo salvo la parte de la lista de películas puntuadas, que necesito implementar el endpoint en el hook useMoviesApi para luego usaro en MyListPage.
No he podido probar la integración con API más allá de la carga inicial de películas populares debido al problema persistente. El resto de integraciones cómo la páginación, la búsqueda, rating...etc no he podido probarlos.

Me hubiese gustado tener más tiempo ya que realmente he empezado el miércoles 22 y el tema de la API me ha trastocado un poco los planes.

En cuanto al código, me hubiese gustado montar una buena estructura DDD pero por tiempo he decidido tirar un poco por lo de siempre intentando que la estructura fuera descriptiva y sencilla al tratarse de una funcionalidad limitida.

Por otra parte, mi planteamiento en cuanto a componentes ha sido utilzar un componente base Page.tsx, que al final la aplicación tiene dos pages y el contenido a mostrar puede variar entre las películas populares/resultados de la busqueda/lista de puntuadas

Para las llamadas a API he decidido usar dos contextos para gestionar datos de API, por una parte el contexto de sesion de invitado y por otra el de películas. Estos contextos se sirven del estado de un reducer via useReducer y exportan también los métodos que llaman a API en un customHook. Podría haber usado los customHook fuera del contexto, simplemente fue un poco por agilizar.

En cuanto a la apariencia, he usado material UI base, sin florituras.

Y poco más que contar, espero que os guste, en realidad me hubiese gustado terminar la funcionalidad y darle una apariencia más bonita, así como estructurar un poco más el código. El fin de semana intentaré terminarla.

Un saludo!

## Funcionalidades

- Búsqueda de películas por título.
- Listado de películas populares.
- Detalle de cada película.
- Valoración de películas (se requiere sesión de invitado).
- Página con listado de películas puntuadas [WIP]

## Tecnologías utilizadas

- React
- TypeScript
- React Router Dom
- Context API
- Material UI
- Testing Library
- Jest

## Estructura de la aplicación

- `src/`
  - `components/`: componentes reutilizables
  - `context/`: contextos de React
  - `pages/`: páginas de la aplicación
  - `shared/`: utilidades y types compartidos
  - `App.tsx`: componente principal de la aplicación
  - `index.tsx`: punto de entrada de la aplicación
  - `setupTests.ts`: archivo de configuración para los tests

## Contribuciones

Las contribuciones son bienvenidas. Si quieres proponer alguna mejora o solucionar algún problema, por favor abre un issue o una pull request.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
