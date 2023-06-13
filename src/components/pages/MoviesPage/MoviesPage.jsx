import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import getTrending from '../../service/MovieService';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=d36c76811afe64ae46b83ec8fd55864b`
        );
        const { results, id, title } = data;
        setMovies(results);
        console.log(id, title);
      };
      getMovies();
    } catch (error) {
      console.log('Error');
    }
  }, []);

  const location = useLocation();
  console.log('location', location);
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h2>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
