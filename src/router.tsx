import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Time from "./pages/Time";
import Movie from "./pages/Movie";
import MovieInfo from "./pages/MovieInfo";
import Seat from "./pages/Seat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "/movietimeset/:movieNm",
    element: <Time />,
  },
  {
    path: "/movie/:movieNm",
    element: <MovieInfo />,
  },
  {
    path: "/Seat",
    element: <Seat />,
  },
]);

export default router;
