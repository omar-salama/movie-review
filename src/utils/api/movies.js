import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const token = import.meta.env.VITE_REACT_APP_API_KEY;

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getPopularMovies = async () => {
  const movies = await axios.get(`${BASE_URL}/movie/popular`);
  return movies.data.results;
}

export const getMovieDetails = async (id) => {
  const movies = await axios.get(`${BASE_URL}/movie/${id}`);
  return movies.data;
}

