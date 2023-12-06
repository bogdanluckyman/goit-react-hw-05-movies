import { useState, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchMoviesDetails } from 'Api';
import { ColorRing } from 'react-loader-spinner';
import Notiflix from 'notiflix';

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const backLinkRef = useRef(location);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchDetails = async () => {
        const detailsResponse = await fetchMoviesDetails(movieId);
        setDetails(detailsResponse);
      };
      fetchDetails();
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const { poster_path, title, genres, vote_average, overview } = details;

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
      <div>
        <Link to={backLinkRef.current.state?.from || '/'}>Back</Link>
        {poster_path && (
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        )}
      </div>
      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
