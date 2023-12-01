import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
