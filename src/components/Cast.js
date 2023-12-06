import { fetchMoviesCast } from 'Api';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const getActors = async () => {
      try {
        setIsLoading(true);
        const actorsArr = await fetchMoviesCast(movieId);
        setActorsList(actorsArr.cast);
      } catch (error) {
        Notiflix.Notify.failure(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    getActors();
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
      <ul>
        {actorsList.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <b>{name}</b>
            <p>Character: {character}</p>
            {profile_path && (
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
// const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

// <img src={
//  movieData.poster_path ?
//  https://image.tmdb.org/t/p/w500/${movieData.poster_path}
//  : defaultImg
// }
// width={250}
// alt="poster"
// />
