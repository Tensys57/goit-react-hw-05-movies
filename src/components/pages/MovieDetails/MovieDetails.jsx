import { getDetails } from 'components/service/MovieService';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/');

  const imgPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

  useEffect(() => {
    try {
      const response = async movieId => {
        const data = await getDetails(movieId);
        setMovieInfo(data);
      };
      response(movieId);
    } catch (error) {
      console.log('Error');
    }
  }, [movieId]);

  if (!movieInfo) return;

  return (
    <>
      <div className={css.container}>
        <Link to={backLinkHref.current}>Go back</Link>;
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
              : imgPlaceholder
          }
          alt={movieInfo.title}
          width="200px"
        />
        <div className={css.details}>
          <h2>{movieInfo.title}</h2>
          <p>Release date:</p>
          <p>{movieInfo.release_date}</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{movieInfo.genres.map(e => e.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink className={css.navLink} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
