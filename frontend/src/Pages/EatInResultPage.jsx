import React from 'react';
import { Link } from 'react-router-dom';

// Hardcoded single recipe data
const recipe = {
  name: 'Spaghetti Carbonara',
  image: 'https://via.placeholder.com/150', // Replace with real PNG URL
  ingredients: [
    '200g spaghetti',
    '100g bacon',
    '2 eggs',
    '50g parmesan cheese',
    'Salt & pepper',
    '200g spaghetti',
    '100g bacon',
    '2 eggs',
    '50g parmesan cheese',
    'Salt & pepper',
    '200g spaghetti',
    '100g bacon',
    '2 eggs',
    '50g parmesan cheese',
    'Salt & pepper',
  ],
  instructions:
    '1. Boil pasta. 2. Fry bacon. 3. Mix eggs and cheese. 4. Combine everything and serve.',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

const EatInResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E]">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 mt-3 text-[#3260ea]">Craving Fulfilled - {recipe.name}</h1>

      {/* Recipe Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Image and Ingredients */}
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Right Side: Instructions */}
          <div className="w-full md:w-1/2 pl-4">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Instructions</h3>
            <p className="text-lg text-gray-700 mb-3">{recipe.instructions}</p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
          <a
            href={recipe.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full md:w-auto text-center"
          >
            Watch Recipe Video
          </a>
          <Link
            to="/"
            className="text-white bg-gray-600 px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 w-full md:w-auto text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EatInResultPage;