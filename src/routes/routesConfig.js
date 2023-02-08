import FavoritePage from "../containers/FavoritePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    path: "/favorites",
    element: <FavoritePage />,
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routesConfig;
