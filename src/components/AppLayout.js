import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <GlobalStyle />
    </div>
  );
};
