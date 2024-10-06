import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EatOutFormPage = () => {
  // State variables to store user inputs
  const [cuisine, setCuisine] = useState('');
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [address, setAddress] = useState('');

  const handlePriceClick = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E]">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 text-[#3260ea]">What Are You Craving?</h1>

      {/* Cuisine Input */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Cuisine</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          placeholder="Select cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
      </div>

      {/* Price Range */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Price Range</label>
        <div className="flex space-x-4">
          {['$', '$$', '$$$', '$$$$'].map((sign, index) => (
            <span
              key={index}
              className={`text-3xl cursor-pointer ${price === sign ? 'text-green-500' : 'text-gray-500'} transition duration-300`}
              onClick={() => handlePriceClick(sign)}
            >
              {sign}
            </span>
          ))}
        </div>
      </div>

      {/* Address Input */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Address</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Rating Input */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-3xl cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-400'} transition duration-300`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Home Button */}
      <Link to="/">
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 mb-4">
          Home
        </button>
      </Link>

      {/* Submit Button (Links to OutResults Page) */}
      <Link to="/outResults">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Find Restaurants
        </button>
      </Link>
    </div>
  );
};

export default EatOutFormPage;
