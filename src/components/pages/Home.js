import { fetchMovies } from 'components/Api';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMovies = await fetchMovies();
      setMovies(topMovies.results);
    };
    fetchTopMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
