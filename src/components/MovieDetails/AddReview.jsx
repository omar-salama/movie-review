/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/movies/${movieId}/reviews`, {
        name,
        review,
      });
      setName('');
      setReview('');
      setError('');
    } catch (error) {
      setError('Failed to submit review. Please try again.');
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mt-4 mb-2">Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your review"
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button
          type="submit"
          className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 border-solid border-2 border-blue-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
