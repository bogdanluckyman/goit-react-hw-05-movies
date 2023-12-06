import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyles';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import {
  NavItem,
  NavItemLink,
  Navigation,
  StyledMain,
} from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <NavItem>
            <NavItemLink to="/">Home</NavItemLink>
          </NavItem>

          <NavItem>
            <NavItemLink to="/movies">Movies</NavItemLink>
          </NavItem>
        </Navigation>
      </header>

      <StyledMain>
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
      </StyledMain>
    </div>
  );
};
