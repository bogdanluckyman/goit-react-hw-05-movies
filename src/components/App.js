import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import { lazy } from 'react';

const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const HomePage = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const SearchMovie = lazy(() => import('../pages/Movies'));
const MovieCast = lazy(() => import('./Cast'));
const MoviesReviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
