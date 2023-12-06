import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyles';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';

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
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        >
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </main>
    </div>
  );
};
