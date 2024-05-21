/* eslint-disable react/prop-types */

import getImageUrl from '../../utils/getImageUrl';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="mb-2 rounded-lg"
      />
      <div className="text-center">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
        <p className="text-sm">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieItem;
