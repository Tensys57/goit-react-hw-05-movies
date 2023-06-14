import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearches } from '../../service/MovieService';

export const MoviesPage = () => {
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
        <button type="submit">Search</button>
        <input
          placeholder="What do you want to find?"
          name="query"
          autoFocus
          value={query}
          onChange={handleChange}
        />
      </form>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};
