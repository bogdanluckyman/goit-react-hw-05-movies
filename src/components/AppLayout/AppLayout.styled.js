import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  background-color: #333;
  text-align: center;
  padding: 10px;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 25px;
`;

export const NavItemLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease-in-out;

  &:hover,
  :focus {
    color: yellow;
  }
`;

export const StyledMain = styled.main`
  text-align: center;
`;
