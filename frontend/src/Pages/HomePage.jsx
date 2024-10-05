import React from 'react';
import { Link } from 'react-router-dom';
import eatOutImage from '../assets/eatoutbanq.png';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#EFB710]">
      {/* Title */}
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1048EF] to-[#3260ea] mb-40 transition-transform transform hover:scale-110">
        Crave It!
      </h1>

      {/* Button Container */}
      <div className="flex justify-center space-x-6">
        {/* Eat In Button */}
        <Link to="/eat-in-form" className="relative w-64 h-64 bg-[#EFB710] rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
          <img
            src="https://via.placeholder.com/256x256?text=Eat+In"
            alt="Eat In"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Eat In</h2>
              <p className="text-white text-lg">Find recipes based on cravings and ingredients</p>
            </div>
          </div>
        </Link>

        {/* Eat Out Button */}
        <Link to="/eat-out-form" className="relative w-64 h-64 bg-[#EFB710] rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
          <img
            src={eatOutImage}
            alt="Eat Out"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Eat Out</h2>
              <p className="text-white text-lg">Discover nearby spots to dine out</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
