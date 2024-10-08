import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Hardcoded single recipe data
// const recipe = {
//   name: 'Spaghetti Carbonara',
//   image: 'https://via.placeholder.com/150', // Replace with real PNG URL
//   ingredients: [
//     '200g spaghetti',
//     '100g bacon',
//     '2 eggs',
//     '50g parmesan cheese',
//     'Salt & pepper',
//     '200g spaghetti',
//     '100g bacon',
//     '2 eggs',
//     '50g parmesan cheese',
//     'Salt & pepper',
//     '200g spaghetti',
//     '100g bacon',
//     '2 eggs',
//     '50g parmesan cheese',
//     'Salt & pepper',
//   ],
//   instructions:
//     '1. Boil pasta. 2. Fry bacon. 3. Mix eggs and cheese. 4. Combine everything and serve.',
//   videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
// };

const EatInResultPage = () => {
  const location = useLocation();
  const apiResponse = location.state;
  console.log("Apiresponse", apiResponse)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#EFB710] to-[#FFE59E]">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 mt-3 text-[#3260ea]">{apiResponse.apiData.strMeal}</h1>

      {/* Recipe Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Image and Ingredients */}
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <img
              src={apiResponse.apiData.strMealThumb}
              alt={apiResponse.apiData.strMeal}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg list-none">
              <li>{apiResponse.apiData.strIngridient1}</li>
              <li>{apiResponse.apiData.strIngredient2}</li>
              <li>{apiResponse.apiData.strIngredient3}</li>
              <li>{apiResponse.apiData.strIngredient4}</li>
              <li>{apiResponse.apiData.strIngredient5}</li>
              <li>{apiResponse.apiData.strIngredient6}</li>
              <li>{apiResponse.apiData.strIngredient7}</li>
              <li>{apiResponse.apiData.strIngredient8}</li>
              <li>{apiResponse.apiData.strIngredient9}</li>
              <li>{apiResponse.apiData.strIngredient10}</li>
              <li>{apiResponse.apiData.strIngredient11}</li>
              <li>{apiResponse.apiData.strIngredient12}</li>
              <li>{apiResponse.apiData.strIngredient13}</li>
              <li>{apiResponse.apiData.strIngredient14}</li>
              <li>{apiResponse.apiData.strIngredient15}</li>
              <li>{apiResponse.apiData.strIngredient16}</li>
              <li>{apiResponse.apiData.strIngredient17}</li>
              <li>{apiResponse.apiData.strIngredient18}</li>
              <li>{apiResponse.apiData.strIngredient19}</li>
              <li>{apiResponse.apiData.strIngredient20}</li>
            </ul>

          </div>

          {/* Right Side: Instructions */}
          <div className="w-full md:w-1/2 pl-4">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Instructions</h3>
            <p className="text-lg text-gray-700 mb-3">{apiResponse.apiData.strInstructions}</p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
          {/* <h1>Youtbe: {apiResponse.apiData.strYoutube}</h1> */}
          <a
            href={apiResponse.apiData.strYoutube}
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