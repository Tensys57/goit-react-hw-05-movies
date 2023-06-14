import { getCast } from 'components/service/MovieService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);
  const imgPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

  useEffect(() => {
    try {
      const response = async movieId => {
        const credits = await getCast(movieId);
        setCastInfo(credits.cast);
      };
      response(movieId);
    } catch (error) {
      console.log('Error');
    }
  }, [movieId]);
  if (!castInfo) return;

  return (
    <>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {castInfo.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                  : imgPlaceholder
              }
              alt={actor.name}
              width="100px"
            />
            <h2>{actor.name}</h2>
            <h4>Character: {actor.character}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};
