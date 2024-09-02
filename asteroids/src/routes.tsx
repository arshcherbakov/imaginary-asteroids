import { createBrowserRouter } from "react-router-dom";
import AsteroidData from "./components/pages/AsteroidData";
import { ROUTES_LIST } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.home,
    element: <AsteroidData />,
  },
]);

export default router;
