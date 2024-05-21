import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../utils/api/movies';
import getImageUrl from '../utils/getImageUrl';
import Reviews from '../components/MovieDetails/Reviews';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  if (!movie)
    return (
      <div className="flex justify-center items-center h-screen">
        No movie data available
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/3">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="mb-4 mx-auto w-48 h-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">{movie.title}</h2>
        <p className="text-gray-700 mb-4">{movie.overview}</p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Release Date: </span>
          {movie.release_date}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Genres: </span>
          {movie.genres.map((obj) => obj['name']).join(', ')}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Average Rating: </span>
          {movie.vote_average}
        </p>
        <Reviews movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
