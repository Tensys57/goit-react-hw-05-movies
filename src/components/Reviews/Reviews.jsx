import { getReviews } from 'components/service/MovieService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const Placeholder = "We don't have any reviews for this movie.";

  useEffect(() => {
    try {
      const response = async movieId => {
        const data = await getReviews(movieId);
        setReviewsInfo(data.results);
      };
      response(movieId);
    } catch (error) {
      console.log('Error');
    }
  }, [movieId]);

  if (!reviewsInfo) return;

  return (
    <>
      {reviewsInfo.length === 0 && <p>{Placeholder}</p>}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {reviewsInfo.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
