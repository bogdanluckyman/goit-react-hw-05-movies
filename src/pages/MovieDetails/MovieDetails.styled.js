import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Back = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 30px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: red;
  }
`;
export const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 5px;
  margin-left: 20px;
`;
export const HeroTitle = styled.h1`
  width: 60%;
  font-size: 24px;
  margin-bottom: 10px;
`;
export const Score = styled.p`
  width: 60%;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Overview = styled.h2`
  width: 60%;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const OverviewText = styled.p`
  width: 60%;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Genres = styled.h3`
  width: 60%;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const GenresList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const GenresListItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const LinkItem = styled.li`
  margin-bottom: 10px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #1a1a1a;
  margin-bottom: 10px;
  display: inline-block;
  &:hover {
    color: white;
    background-color: red;
  }
`;
