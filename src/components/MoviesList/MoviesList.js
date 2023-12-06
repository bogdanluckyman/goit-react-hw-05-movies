import { useLocation } from 'react-router-dom';
import { ItemLink, ItemText, List, ListItem } from './MoviesList.styled';

export const NameList = ({ movie }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movie.map(item => (
          <ListItem key={item.id}>
            <ItemLink to={`/movies/${item.id}`} state={{ from: location }}>
              <ItemText>{item.title}</ItemText>
            </ItemLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
