import { NavLink, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { HomePage } from './pages/Home';

export const App = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
