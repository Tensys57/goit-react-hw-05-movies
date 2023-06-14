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

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/');
  const imgPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
  console.log('backLinkHref.current>> ', backLinkHref.current);

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
      <h2>{movieInfo.title}</h2>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
