import { fetchMoviesDetails } from 'components/Api';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsResponce = await fetchMoviesDetails(movieId);
      setDetails(detailsResponce);
    };
    fetchDetails();
  }, [movieId]);

  const { poster_path, title, genres, vote_average, overview } = details;

  return (
    <div>
      <div>
        <Link to={backLinkRef.current?.from ?? '/'}>Back</Link>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
