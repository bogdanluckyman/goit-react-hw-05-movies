import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesDetails } from 'Api';
import { ColorRing } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import {
  Back,
  Box,
  Container,
  Genres,
  GenresList,
  GenresListItem,
  HeroTitle,
  Image,
  LinkItem,
  LinkList,
  Overview,
  OverviewText,
  Score,
  StyledLink,
} from './MovieDetails/MovieDetails.styled';

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const backLinkRef = useRef(location);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchDetails = async () => {
        const detailsResponse = await fetchMoviesDetails(movieId);
        setDetails(detailsResponse);
      };
      fetchDetails();
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const { poster_path, title, genres, vote_average, overview } = details;

  return (
    <div>
      <Container>
        <Back to={backLinkRef.current.state?.from || '/'}>
          <IoArrowBackCircleSharp />
        </Back>
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

        {poster_path && (
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        )}
        <Box>
          <HeroTitle>{title}</HeroTitle>
          <Score>User Score: {vote_average}%</Score>
          <Overview>Overview</Overview>
          <OverviewText>{overview}</OverviewText>
          <Genres>Genres</Genres>
          <GenresList>
            {genres &&
              genres.map(genre => (
                <GenresListItem key={genre.id}>{genre.name}</GenresListItem>
              ))}
          </GenresList>

          <LinkList>
            <LinkItem>
              <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
            </LinkItem>
          </LinkList>
        </Box>
      </Container>
      <Outlet />
    </div>
  );
}
