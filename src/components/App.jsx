import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home/Home';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies:movieId" element={<MovieDetails />} />
        <Route path="movies:movieId/cast" element={<MovieDetails />} />
        <Route path="movies:movieId/reviews" element={<MovieDetails />} />
        <Route />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
