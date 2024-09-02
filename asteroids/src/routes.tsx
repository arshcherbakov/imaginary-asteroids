import Home from "./components/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES_LIST } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.home,
    element: <Home />,
  },
]);

export default router;
