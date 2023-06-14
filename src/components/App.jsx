import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { HomePage } from './pages/HomePage/HomePage';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
