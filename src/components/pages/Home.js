import { fetchMovies } from 'components/Api';
import { NameList } from 'components/MoviesList';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMovies = await fetchMovies();
      setMovies(topMovies.results);
    };
    fetchTopMovies();
  }, []);
  return <NameList movie={movies} />;
}
