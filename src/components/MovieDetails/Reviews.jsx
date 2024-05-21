/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AddReview from './AddReview';
import { getReviews } from '../../utils/api/movies';

const Review = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isNewReviewAdded, setIsNewReviewAdded] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const reviewsData = await getReviews(movieId);
        setReviews(reviewsData);
      } catch (e) {
        console.error('Error fetching reviews:', e);
      } finally {
        setLoading(false);
        setIsNewReviewAdded(false);
      }
    })();
  }, [movieId, isNewReviewAdded]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500"></div>
        <span className="ml-4 text-xl text-gray-600">Loading Reviews...</span>
      </div>
    );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800">Reviews</h3>
      {reviews?.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review._id} className="p-4 border-b border-gray-200">
              <p className="text-lg font-semibold text-gray-700 capitalize">
                {review.name} said:
              </p>
              <p className="text-gray-600">{review.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-lg text-gray-600">
          No reviews yet for this film.
        </div>
      )}
      <h3 className="text-lg font-bold mt-4 mb-3 text-gray-800">Add yours!</h3>
      <AddReview movieId={movieId} onNewReview={setIsNewReviewAdded} />
    </div>
  );
};

export default Review;
