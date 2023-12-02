import { fetchMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
