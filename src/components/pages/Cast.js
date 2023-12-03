import { fetchMoviesCast } from 'components/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getActors = async () => {
      try {
        const actorsArr = await fetchMoviesCast(movieId);
        setActorsList(actorsArr.cast);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    getActors();
  }, [movieId]);

  return (
    <div>
      <ul>
        {actorsList.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <b>{name}</b>
            <p>Character: {character}</p>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
