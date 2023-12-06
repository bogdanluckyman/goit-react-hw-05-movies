import { Link, useLocation } from 'react-router-dom';

export const NameList = ({ movie }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movie.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
