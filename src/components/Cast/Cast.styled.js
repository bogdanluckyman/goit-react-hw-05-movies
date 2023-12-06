import styled from 'styled-components';

export const ActorsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  width: calc(16.666% - 10px);
  margin: 10px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #eee;
`;

export const ActorName = styled.b`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ItemText = styled.p`
  font-size: 12px;
  margin: 5px 0;
`;

export const ActorPoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
`;
