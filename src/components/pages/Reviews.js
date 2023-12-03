import { fetchMoviesReviews } from 'components/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsArr = await fetchMoviesReviews(movieId);
        setReviews(reviewsArr.results);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Reviews unavailable</p>
      )}
    </div>
  );
}
