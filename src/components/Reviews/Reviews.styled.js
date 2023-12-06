import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AuthorName = styled.b`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;
