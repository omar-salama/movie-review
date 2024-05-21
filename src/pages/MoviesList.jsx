import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../utils/api/movies';
import MovieItem from '../components/MoviesList/MovieItem';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data);
    });
  }, []);


  if (!movies) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieItem movie={movie} key={movie.id} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
