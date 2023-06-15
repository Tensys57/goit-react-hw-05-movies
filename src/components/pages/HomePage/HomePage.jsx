import { useState, useEffect } from 'react';
import { Suspense } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './HomePage.module.css';
import { getTrending } from '../../service/MovieService';

const HomePage = () => {
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
export default HomePage;
