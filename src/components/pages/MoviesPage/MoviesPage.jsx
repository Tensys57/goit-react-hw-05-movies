import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearches } from '../../service/MovieService';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const params = searchParams.get('query') || '';
  const location = useLocation;

  useEffect(() => {
    if (!params) return;
    try {
      const getQuery = async params => {
        const data = await getSearches(params);
        setMovies(data.results);
      };
      getQuery(params);
    } catch (error) {
      console.log('Error');
    }
  }, [params]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return alert('There is no query');
    }
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
        <input
          placeholder="What do you want to find?"
          name="query"
          autoFocus
          value={query}
          onChange={handleChange}
          className={css.search}
        />
      </form>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;
