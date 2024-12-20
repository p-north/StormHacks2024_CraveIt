import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EatInFormPage = () => {
  const [formData, setFormData] = useState({
    type: 'eat-in',
    cuisine: "",
    dish1: "",
    dish2: "",
    dish3: "",
  });

  //Function to handle changes
  const handleCuisineChange = (e) => {
    setFormData((prevData) => ({ ...prevData, cuisine: e.target.value }));
  };
  const handleDishChange1 = (e) => {
    setFormData((prevData) => ({ ...prevData, dish1: e.target.value }));
  };
  const handleDishChange2 = (e) => {
    setFormData((prevData) => ({ ...prevData, dish2: e.target.value }));
  };
  const handleDishChange3 = (e) => {
    setFormData((prevData) => ({ ...prevData, dish3: e.target.value }));
  };

  // const [apiResponse, setApiResponse] = useState();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent page refresh
    try {
      const response = await fetch("https://crave-it-server.onrender.com/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //Send from data as JSON
      });

      const result = await response.json();
      // setApiResponse(result.apiResponse)
      navigate('/inResults', {state:result})
      // console.log("Response from server", result);
    } catch (error) {
      console.log("Error sending data to backend:", error);
    }
  };

  return (
    //background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500">
      {/* Title */}
        <h1 className="text-5xl font-bold mb-10 text-[#3260ea]">
          What Are You Craving?
        </h1>

      {/* Form */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Cuisines */}
          <div className="mb-6 w-80">
            <label
              htmlFor="Cuisine"

              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Cuisine&nbsp;
            </label>
            <input
              type="text"
              id="Cuisine"
              name="Cuisine"
              list="Cuisines"
              value={formData.cuisine}
              placeholder = "Select Cuisine"
              onChange={handleCuisineChange}
              className="w-full p-3 border
            border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            ></input>

            <datalist id="Cuisines">
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="French">French</option>
              <option value="Italian">Italian</option>
            
            </datalist>
          </div>

          {/* Type of Dish 1st preference*/}
          <div className="mb-6 w-80">
            <label
              htmlFor="TypeOfDish"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Type of Dish (1st preference)&nbsp;
            </label>

            <input
              type="text"
              id="TypeOfDish"
              name="TypeofDish1"
              list="Dishes"
              placeholder = "Select Dish 1"
              value={formData.dish1}
              onChange={handleDishChange1}
              className="w-full p-3 border
            border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            ></input>

            <datalist id="Dishes">
              <option value="Beef">Beef</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Chicken">Chicken</option>
              <option value="Dessert">Dessert</option>
              <option value="Goat">Goat</option>
              <option value="Lamb">Lamb</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pasta">Pasta</option>
              <option value="Pork">Pork</option> n
              <option value="Seafood">Seafood</option>
              <option value="Side">Side</option>
              <option value="Starter">Starter</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </datalist>
          </div>

          {/* Type of Dish 2nd preference*/}
          <div className="mb-6 w-80">
            <label
              htmlFor="TypeOfDish"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Type of Dish (2nd preference)&nbsp;
            </label>

            <input
              type="text"
              id="TypeOfDish"
              name="TypeofDish2"
              placeholder = "Select Dish 2"
              list="Dishes"
              value={formData.dish2}
              onChange={handleDishChange2}
              className="w-full p-3 border
                border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            ></input>

            <datalist id="Dishes">
              <option value="Beef">Beef</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Chicken">Chicken</option>
              <option value="Dessert">Dessert</option>
              <option value="Goat">Goat</option>
              <option value="Lamb">Lamb</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pasta">Pasta</option>
              <option value="Pork">Pork</option> n
              <option value="Seafood">Seafood</option>
              <option value="Side">Side</option>
              <option value="Starter">Starter</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </datalist>
          </div>

          {/* Type of Dish 3rd preference*/}
          <div className="mb-6 w-80">
            <label
              htmlFor="TypeOfDish"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Type of Dish (3nd preference)&nbsp;
            </label>

            <input
              type="text"
              id="TypeOfDish"
              name="TypeofDish3"
              list="Dishes"
              value={formData.dish3}
              placeholder = "Select Dish 3"
              onChange={handleDishChange3}
              className="w-full p-3 border
              border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            ></input>

            <datalist id="Dishes">
              <option value="Beef">Beef</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Chicken">Chicken</option>
              <option value="Dessert">Dessert</option>
              <option value="Goat">Goat</option>
              <option value="Lamb">Lamb</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pasta">Pasta</option>
              <option value="Pork">Pork</option> n
              <option value="Seafood">Seafood</option>
              <option value="Side">Side</option>
              <option value="Starter">Starter</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </datalist>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>

          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Generate Recipes
            <Link to={'inResults'}></Link>
          </button>
          </div>

          <div className='flex justify-center my-3'>
          <Link to="/">
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">
          Home
        </button>
      </Link>
          
          </div>
        </form>
      </div>
    </div>
  );
};

//Cusines
export default EatInFormPage;
