import { useEffect } from 'react';
import { fetchMovies } from './Api';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMovies = await fetchMovies();
      console.log(topMovies.results[0]);
    };
    fetchTopMovies();
  }, []);
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
