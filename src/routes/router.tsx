import { Route, Routes } from "react-router-dom";

// Layouts
import DefaultLayout from "../layouts/Default";

// Components
import MoviesList from "../components/moviesList/MoviesList";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<MoviesList />} />
      </Route>
    </Routes>
  );
}

export default Router;
