import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { HomePage } from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { SearchMovie } from './pages/Movies';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route index element={<div>Movie Overview</div>} />
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
