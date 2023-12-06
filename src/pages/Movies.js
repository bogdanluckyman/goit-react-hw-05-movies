import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'components/Api';
import { NameList } from 'components/MoviesList';

export default function SearchMovie() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParam = searchParams.get('query') || '';

  useEffect(() => {
    setSearchValue(queryParam);
  }, [queryParam]);

  const foundMovie = useCallback(async () => {
    if (searchValue.trim() !== '') {
      const movies = await fetchSearchMovies(searchValue);
      setMovieList(movies.results);
      searchParams.set('query', searchValue);
      setSearchParams(searchParams);
    }
  }, [searchValue, searchParams, setSearchParams]);

  useEffect(() => {
    if (isSearching) {
      foundMovie();
      setIsSearching(false);
    }
  }, [foundMovie, isSearching]);

  useEffect(() => {
    if (location.state?.query && location.state.query !== searchValue) {
      setSearchValue(location.state.query);
      setIsSearching(true);
    }
  }, [location.state, searchValue]);

  const handleInputChange = evt => setSearchValue(evt.target.value);

  const handleSearchClick = async () => {
    if (searchValue.trim() !== '') {
      setIsSearching(true);
      navigate(`/movies`, { state: { query: searchValue } });
    }
  };

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
