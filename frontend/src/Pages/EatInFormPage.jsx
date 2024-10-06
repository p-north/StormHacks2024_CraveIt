import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const EatInFormPage = () => {
  return (
    //background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500">
    
   
      {/* Title */}
      <div className="-mt-60">
        <h1 className="text-5xl font-bold mb-10 text-gray-900">
            What Are You Craving?
        </h1>
      </div>

      {/* Form */}
      <div>
        <form method="POST" action="">
          
          {/* Cuisines */}
          <div className="mb-6 w-80">
            <label htmlFor="Cuisine" className="block text-lg font-semibold text-gray-800 mb-2" >Cuisine&nbsp;</label>
            <input type="text" id="Cuisine" name="Cuisine" list="Cuisines" className="w-full p-3 border
            border-gray-300 rounded-lg focus:ring focus:ring-blue-500">
            </input>
              
                <datalist id="Cuisines">
                    
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Chinese">Chinese</option>
                    
                    <option value="Croatian">Croatian</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Egyptain">Egyptian</option>
                    <option value="Fillipino">Fillipino</option>

                    <option value="French">French</option>
                    <option value="Greek">Greek</option>
                    <option value="Indian">Indian</option>
                    <option value="Irish">Irish</option>

                    <option value="Italian">Italian</option>
                    <option value="Jamaican">Jamaican</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Kenyan">Kenyan</option>

                    <option value="Malaysian">Malaysian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Moroccan">Morroccan</option>
                    <option value="Polish">Polish</option>

                    <option value="Portugese">Portugese</option>
                    <option value="Russian">Russian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Thai">Thai</option>


                    <option value="Tunisian">Tunisian</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Vietnamese">Vietnamese</option>

                    <option value="Unknown">Other</option>
                    
                
              </datalist>
            </div>

            {/* Type of Dish 1st preference*/}
            <div className="mb-6 w-80">

            <label htmlFor="TypeOfDish" className="block text-lg font-semibold text-gray-800 mb-2" >Type of Dish (1st preference)&nbsp;</label>
          
            <input type="text" id="TypeOfDish" name="TypeofDish1" list="Dishes" className="w-full p-3 border
            border-gray-300 rounded-lg focus:ring focus:ring-blue-500">
            </input>
              
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
            <div className="mb-6 w-80" >
              <label htmlFor="TypeOfDish" className="block text-lg font-semibold text-gray-800 mb-2" >Type of Dish (2nd preference)&nbsp;</label>
            
                <input type="text" id="TypeOfDish" name="TypeofDish2" list="Dishes" className="w-full p-3 border
                border-gray-300 rounded-lg focus:ring focus:ring-blue-500">
                </input>
                
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
              <label htmlFor="TypeOfDish" className="block text-lg font-semibold text-gray-800 mb-2" >Type of Dish (3nd preference)&nbsp;</label>
              
              <input type="text" id="TypeOfDish" name="TypeofDish3" list="Dishes" className="w-full p-3 border
              border-gray-300 rounded-lg focus:ring focus:ring-blue-500">
              </input>
                  
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
          
        </form>


      </div>

      {/* Submit Button */}
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
      Generate Recipies
    </button>


    
    </div>

  )
}


//Cusines
export default EatInFormPage