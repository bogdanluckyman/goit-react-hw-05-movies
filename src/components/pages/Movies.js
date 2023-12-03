import { fetchSearchMovies } from 'components/Api';
import { NameList } from 'components/MoviesList';
import { useState } from 'react';

export default function SearchMovie() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);

  const foundMovie = async () => {
    if (searchValue.trim() !== '') {
      const movieList = await fetchSearchMovies(searchValue);
      setMovieList(movieList.results);
    }
  };

  const handleInputChange = evt => setSearchValue(evt.target.value);
  const handleSearchClick = () => foundMovie();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the movie title"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      <NameList movie={movieList} />
    </div>
  );
}
