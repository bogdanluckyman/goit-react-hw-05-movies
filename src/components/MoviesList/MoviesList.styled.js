import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  column-count: 3;
  column-gap: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  display: block;
  padding: 10px;
  border-radius: 5px;

  &:hover,
  :focus {
    color: yellow;
    background-color: #333;
  }
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;
