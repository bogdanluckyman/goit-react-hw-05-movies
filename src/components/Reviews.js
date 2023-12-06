import { fetchMoviesReviews } from 'Api';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

export default function MoviesReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const reviewsArr = await fetchMoviesReviews(movieId);
        setReviews(reviewsArr.results);
      } catch (error) {
        Notiflix.Notify.failure(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
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
