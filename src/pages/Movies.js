import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'Api';
import { NameList } from 'components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { Container, StyledBtn, StyledInput } from './Movies/Movies.styled';

export default function SearchMovie() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParam = searchParams.get('query') || '';

  useEffect(() => {
    try {
      setIsLoading(true);
      setSearchValue(queryParam);
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [queryParam]);

  useEffect(() => {
    try {
      setIsLoading(true);

      if (isSearching && searchValue.trim() !== '') {
        const foundMovie = async () => {
          try {
            const movies = await fetchSearchMovies(searchValue);
            setMovieList(movies.results);
            searchParams.set('query', searchValue);
            setSearchParams(searchParams);
          } catch (error) {
            Notiflix.Notify.failure(`${error}`);
          } finally {
            setIsLoading(false);
          }
        };

        foundMovie();
        setIsSearching(false);
      } else if (isSearching) {
        Notiflix.Notify.warning('Please enter a movie title.');
        setIsLoading(false);
      }
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [searchValue, isSearching, searchParams, setSearchParams]);

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
    } else {
      Notiflix.Notify.warning('Please enter a movie title.');
    }
  };

  return (
    <Container>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      <StyledInput
        type="text"
        placeholder="Enter the movie title"
        value={searchValue}
        onChange={handleInputChange}
      />
      <StyledBtn onClick={handleSearchClick}>Search</StyledBtn>
      <NameList movie={movieList} />
    </Container>
  );
}
