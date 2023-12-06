import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </main>
    </div>
  );
};
