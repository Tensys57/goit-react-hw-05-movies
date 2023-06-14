import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
