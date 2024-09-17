import { createBrowserRouter } from 'react-router-dom';
import AsteroidData from './components/pages/AsteroidData';
import SearchAsteroid from './components/InputSearchAsteroid';
import { ROUTES_LIST } from './constants';

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.asteroids,
    element: <AsteroidData />,
  },
  {
    path: ROUTES_LIST.search,
    element: <SearchAsteroid />,
  },
]);

export default router;
