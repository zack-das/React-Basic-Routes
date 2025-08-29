// routes.js
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",  // :id is the URL parameter
    element: <Movie />
  },
  {
    path: "*", // This catches all unmatched routes
    element: <ErrorPage />
  }
];


export default routes;