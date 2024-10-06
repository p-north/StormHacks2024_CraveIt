import React from 'react';
import { Link } from 'react-router-dom';

// Hardcoded restaurant data
const restaurants = [
  {
    name: 'Sushi House',
    address: '123 Sushi St, Tokyo, Japan',
    mapsUrl: 'https://maps.google.com/?q=Sushi+House',
  },
  {
    name: 'Pizza Palace',
    address: '456 Pizza Rd, Rome, Italy',
    mapsUrl: 'https://maps.google.com/?q=Pizza+Palace',
  },
  {
    name: 'Burger Haven',
    address: '789 Burger Ave, New York, USA',
    mapsUrl: 'https://maps.google.com/?q=Burger+Haven',
  },
];

const EatOutResults = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E]">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 mt-8  text-[#3260ea]">Craving Fulfilled</h1>

      {/* Restaurant Cards */}
      <div className="space-y-6 max-w-3xl w-full">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-800">{restaurant.name}</h2>
            <p className="text-lg text-gray-700">{restaurant.address}</p>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
        <Link to="/"
            className="text-white bg-gray-600 px-6 py-3 rounded-lg mb-8 mt-5 hover:bg-gray-700 transition duration-300 w-full md:w-auto text-center"
            >
            Back to Home
          </Link>
    </div>
  );
};

export default EatOutResults;
