import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2401e69eb96085cec1913a6203f07437';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async name => {
  try {
    const response = await axios.get(
      `/search/movie?query=${name}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
