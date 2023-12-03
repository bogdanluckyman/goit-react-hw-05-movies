import { fetchMovies } from 'components/Api';
import { NameList } from 'components/MoviesList';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMovies = await fetchMovies();
      setMovies(topMovies.results);
      console.log(topMovies.results);
    };
    fetchTopMovies();
  }, []);

  console.log(movies);
  return <NameList movie={movies} />;
};
