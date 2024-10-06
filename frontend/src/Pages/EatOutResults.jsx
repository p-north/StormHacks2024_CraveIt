import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EatOutResults = () => {
  const location = useLocation();
  const apiResponse = location.state|| [];  // Safely accessing the API results array

  // Assuming the API has exactly 3 objects for now, we can directly reference them:
  const restaurant1 = apiResponse.apiData[0] || {};
  const restaurant2 = apiResponse.apiData[1] || {};
  const restaurant3 = apiResponse.apiData[2] || {};

  console.log('Response:', apiResponse);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E]">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 mt-8  text-[#3260ea]">Craving Fulfilled</h1>

      {/* Restaurant Cards */}
      <div className="space-y-6 max-w-3xl w-full">

        {/* First Restaurant */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 text-center">
          <h2 className="text-3xl font-bold text-blue-800">{restaurant1.name || 'Unnamed Restaurant 1'}</h2>
          <p className="text-lg text-gray-700">{restaurant1.formatted_address || 'Address Not Available'}</p>
          <a
            href={`https://maps.google.com/?q=${restaurant1.formatted_address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View on Google Maps
          </a>
        </div>

        {/* Second Restaurant */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 text-center">
          <h2 className="text-3xl font-bold text-blue-800">{restaurant2.name || 'Unnamed Restaurant 2'}</h2>
          <p className="text-lg text-gray-700">{restaurant2.formatted_address || 'Address Not Available'}</p>
          <a
            href={`https://maps.google.com/?q=${restaurant2.formatted_address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View on Google Maps
          </a>
        </div>

        {/* Third Restaurant */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 text-center">
          <h2 className="text-3xl font-bold text-blue-800">{restaurant3.name || 'Unnamed Restaurant 3'}</h2>
          <p className="text-lg text-gray-700">{restaurant3.formatted_address || 'Address Not Available'}</p>
          <a
            href={`https://maps.google.com/?q=${restaurant3.formatted_address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View on Google Maps
          </a>
        </div>

      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="text-white bg-gray-600 px-6 py-3 rounded-lg mb-8 mt-5 hover:bg-gray-700 transition duration-300 w-full md:w-auto text-center"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default EatOutResults;
