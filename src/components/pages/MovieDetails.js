import { fetchMoviesDetails } from 'components/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsResponce = await fetchMoviesDetails(movieId);
      setDetails(detailsResponce);
      console.log(detailsResponce);
    };
    fetchDetails();
  }, [movieId]);

  const { poster_path, title, genres, vote_average, overview } = details;

  return (
    <div>
      <div>
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
};
