import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <h2>{movie.title || movie.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
