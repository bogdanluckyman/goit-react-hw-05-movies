import { useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchMoviesDetails } from 'components/Api';

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsResponse = await fetchMoviesDetails(movieId);
      setDetails(detailsResponse);
    };
    fetchDetails();
  }, [movieId]);

  const { poster_path, title, genres, vote_average, overview } = details;

  return (
    <div>
      <div>
        <Link to={location.state?.from || '/'}>Back</Link>
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
