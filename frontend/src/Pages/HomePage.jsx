import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E] p-8">
      {/* Logo */}
      <div className="flex items-center justify-center mb-12">
        <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3260ea] to-[#EF7100] drop-shadow-md">
          Crave It!
        </span>
      </div>

      {/* Button Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Eat In Card */}
        <Link
          to="/eat-in-form"
          className="relative group w-full h-72 bg-[#3260ea] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center justify-center text-center text-white p-4"
        >
          <h2 className="text-5xl font-bold mb-2">Eat In</h2>
          <p className="text-lg">Find recipes based on cravings and ingredients</p>
          <div className="absolute bottom-4 right-4 text-white text-xs bg-black bg-opacity-40 rounded px-2 py-1">
            Start Cooking
          </div>
        </Link>

        {/* Eat Out Card */}
        <Link
          to="/eat-out-form"
          className="relative group w-full h-72 bg-[#EF7100] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center justify-center text-center text-white p-4"
        >
          <h2 className="text-5xl font-bold mb-2">Eat Out</h2>
          <p className="text-lg">Discover nearby spots to dine out</p>
          <div className="absolute bottom-4 right-4 text-white text-xs bg-black bg-opacity-40 rounded px-2 py-1">
            Find Restaurants
          </div>
        </Link>
      </div>

      {/* Additional Info Section */}
      <footer className="mt-16 text-center text-gray-700">
        <p className="text-lg">Your one-stop solution for all your food cravings!</p>
        <p className="text-sm">© 2024 Crave It! All rights reserved.</p>
        <p className="text-sm">Hamzah Alshawwaf, Puneet North, Nisal Panditha, Brett Rodrigues</p>
      </footer>
    </div>
  );
};

export default HomePage;
