import axios from 'axios';

const TMDB_URL = import.meta.env.VITE_REACT_TMDB_API_URL;
const APP_URL = import.meta.env.VITE_REACT_APP_API_URL;
const token = import.meta.env.VITE_REACT_APP_API_KEY;

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getPopularMovies = async () => {
  const movies = await axios.get(`${TMDB_URL}/movie/popular`);
  return movies.data.results;
}

export const getMovieDetails = async (id) => {
  const movies = await axios.get(`${TMDB_URL}/movie/${id}`);
  return movies.data;
}

export const submitReview = (id, body) => {
  return axios.post(`${APP_URL}/movies/${id}/reviews`, body);
}

export const getReviews = async (id) => {
  const res = await axios.get(`${APP_URL}/movies/${id}/reviews`);
  return res.data;
}

