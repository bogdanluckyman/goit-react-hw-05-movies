import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'Api';
import { NameList } from 'components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { Container, StyledBtn, StyledInput } from './Movies/Movies.styled';

export default function SearchMovie() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const queryParam = searchParams.get('query') || '';

  useEffect(() => {
    try {
      setIsLoading(true);

      if (queryParam.trim() !== '') {
        const foundMovie = async () => {
          try {
            const movies = await fetchSearchMovies(queryParam);
            setMovieList(movies.results);
          } catch (error) {
            Notiflix.Notify.failure(`${error}`);
          } finally {
            setIsLoading(false);
          }
        };

        foundMovie();
      }
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [queryParam]);

  const handleInputChange = evt => setSearchValue(evt.target.value);
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: searchValue });
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
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Enter the movie title"
          value={searchValue}
          onChange={handleInputChange}
        />
        <StyledBtn type="submit">Search</StyledBtn>
      </form>
      <NameList movie={movieList} />
    </Container>
  );
}
