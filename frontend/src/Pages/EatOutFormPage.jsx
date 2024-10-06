import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'


const EatOutFormPage = () => {
  // const [cuisine, setCuisine] = useState('');
  // const [price, setPrice] = useState(null);
  // const [rating, setRating] = useState(null);
  // const [address, setAddress] = useState('');

  
  const [formData, setFormData] = useState({
    // Data sending goes here
    cuisine: '',
    price: '',
    address: '',
    rating: '',
  });
  
  // Function to handle input changes
  const handlePriceClick = (selectedPrice) => {
    setFormData((prevData) => ({ ...prevData, price: selectedPrice }));
  };

  const handleRatingClick = (selectedRating) => {
    setFormData((prevData) => ({ ...prevData, rating: selectedRating }));
  };

  const handleCuisineChange = (e) =>{
    setFormData((prevData) => ({...prevData, cuisine: e.target.value}))
  }

  const handleAddressChange = (e) =>{
    setFormData((prevData) => ({...prevData, address: e.target.value}))
  }
 
  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent page refresh
    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //Send from data as JSON
      });

      const result = await response.json();
      console.log("Response from server", result);
    } catch (error) {
      console.log("Error sending data to backend:", error);
    }
  };

  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500">
    {/* Title */}
    <h1 className="text-5xl font-bold mb-10 text-gray-900">What Are You Craving?</h1>

    <form onSubmit={handleSubmit}>
      {/* Cuisine Input */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Cuisine</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          placeholder="Select cuisine"
          name='cuisine'
          value={formData.cuisine}
          onChange={handleCuisineChange}
        />
      </div>

      {/* Price Range */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Price Range</label>
        <div className="flex space-x-4">
          {['$', '$$', '$$$', '$$$$'].map((sign, index) => (
            <span
              key={index}
              className={`text-3xl cursor-pointer ${formData.price === sign ? 'text-green-500' : 'text-gray-500'} transition duration-300`}
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
          name='address'
          value={formData.address}
          onChange={handleAddressChange}
        />
      </div>

      {/* Rating Input */}
      <div className="mb-6 w-80">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-3xl cursor-pointer ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-400'} transition duration-300`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

    {/* Submit Button */}
    <button type='submit' className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
      Find Restaurants
    </button>
    </form>

  </div>
);
};
    

    // <>
    // <Link to='/'>
    //         <h1>Home</h1>
    //  </Link>
    // <div>Out Form</div>
    // <Link to="/outResults">Results Here</Link>
    // </>

export default EatOutFormPage;