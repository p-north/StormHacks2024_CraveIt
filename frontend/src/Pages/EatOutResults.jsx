import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EatOutResults = () => {
  const location = useLocation();
  const { cuisine, price, rating, address } = location.state; // Get the form inputs from location.state

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const query = `${cuisine}+restaurants+in+${address}`;
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
        
        // Fetch data
        const response = await fetch(url);
        const data = await response.json();

        // Log the entire response for debugging
        console.log('Full API Response:', data);

        // Check the status returned by the API
        if (data.status === "OK") {
          const filteredResults = data.results.filter(restaurant => {
            return (
              restaurant.rating >= rating &&
              restaurant.price_level <= price.length
            );
          });

          // Slice the results to show only top 3 restaurants
          setRestaurants(filteredResults.slice(0, 3));
        } else {
          // If the status is not OK, show an error
          console.error('Error in API response:', data.status);
          setError(`Error fetching data: ${data.status}`);
        }

      } catch (err) {
        console.error('Failed to fetch restaurants:', err);
        setError('Failed to fetch restaurants. Please try again later.');
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchRestaurants();
  }, [cuisine, address, rating, price]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 text-gray-900">Your Restaurant Results</h1>

      {/* Show loading or error states */}
      {loading ? (
        <p className="text-xl text-white">Loading restaurants...</p>
      ) : error ? (
        <p className="text-xl text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-3 text-blue-800">{restaurant.name}</h2>
                <p className="text-lg text-gray-700 mb-2">Address: {restaurant.formatted_address}</p>
                <p className="text-lg text-gray-700 mb-2">Rating: {restaurant.rating} ⭐</p>
                <p className="text-lg text-gray-700 mb-2">
                  Price: {'$'.repeat(restaurant.price_level || 0)}
                </p>
                <p className="text-lg text-green-600 font-semibold">
                  Open Now: {restaurant.opening_hours?.open_now ? 'Yes' : 'No'}
                </p>
              </div>
            ))
          ) : (
            <p className="text-xl text-white">No restaurants found matching your criteria.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EatOutResults;
