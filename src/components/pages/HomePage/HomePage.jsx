import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { getTrending } from '../../service/MovieService';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await getTrending();
        setMovies(data);
      };
      getMovies();
    } catch (error) {
      console.log('Error');
    }
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList movies={movies} />;
    </>
  );
};
