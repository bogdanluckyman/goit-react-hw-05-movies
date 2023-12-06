import { fetchMovies } from 'Api';
import { NameList } from 'components/MoviesList/MoviesList';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchTopMovies = async () => {
        const topMovies = await fetchMovies();
        setMovies(topMovies.results);
      };
      fetchTopMovies();
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
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
      <h1>Trending Today</h1>
      <NameList movie={movies} />
    </>
  );
}
