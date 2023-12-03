import { Link } from 'react-router-dom';

export const NameList = ({ movie }) => {
  return (
    <div>
      <ul>
        {movie.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
