# react-express-starter

Very minimal [React](https://facebook.github.io/react/) and [Express](https://expressjs.com/) app
with express serving both an API and the react app with both client-side and server-side hot 
reloading.

## How it works

### Client-side HMR

This is achieved with the 
[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and 
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) express middlewares. 
Stateless React components are also supported by using the v3-beta of 
[react-hot-loader](https://github.com/gaearon/react-hot-loader).

### Server-side reloading

Because webpack-dev-middleware stores the client bundle in memory, simply using nodemon to reload 
the express app when files are changed means the HMR on the client-side stops working. The 
workaround to this is inspired by 
[ultimate-hot-reloading-example](https://github.com/glenjamin/ultimate-hot-reloading-example). 
Nodemon isn't used, and instead the server routes are loaded via a global middleware and delegates 
requests to a `require('server/app')` call. [Chokidar](https://github.com/paulmillr/chokidar) is 
then used to watch for filesystem changes within the `server/` directory and the `require` cache is 
cleared when changes are detected. This means when the next request is made the global middleware 
re-requires the module and loads the routes again.

I agree this is hacky, but it's the best way without altering the behaviour of 
webpack-dev-middleware and webpack-hot-middleware.

## Usage

### Installing

Install dependencies with `npm install`

### Development Mode

To run in development mode with HMR and express reloading simply run `npm run dev`

### Building

The project is built via `npm run build`. This creates a `./build` directory with all the files 
required to run the app in production mode simply using `node`.

### Running in Production

If the project has already been built, `npm start` will run the app. There's an additional 
package script to clean, build and start the application, `npm run start:clean`.

## Extras

### Tests

[Jest](https://facebook.github.io/jest/) is used for test. To run, execute `jest` from the root 
of the repository, or `npm run test`.

### Linting

We use [eslint](http://eslint.org/) with the 
[airbnb](https://www.npmjs.com/package/eslint-config-airbnb) configuration, run `npm run lint` to
execute the linter. Alternatively this can be run in 'watch' mode using `npm run lint:watch`, 
this is achieved with the [eslint-watch](https://www.npmjs.com/package/eslint-watch) package.
