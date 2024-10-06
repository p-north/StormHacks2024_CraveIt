import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const EatInFormPage = () => {
  return (
    //background
    <div className="flex flex-col h-screen items-center justify-center bg-[#EFB710]">
    
   
      {/* Title */}
      <div className="-mt-60">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1048EF] to-[#3260ea] mb-40 transition-transform transform hover:scale-110 ">
            What Are You Craving?
        </h1>
      </div>

      {/* Form */}
      <div>
        <form method="POST" action="">
          
          {/* Cuisines */}
          <label for="Cuisines" className="block text-lg font-semibold text-gray-800 mb-2" >Cuisines:&nbsp;</label>
          <input type="text" id="Cuisines"name="" list="Cuisines" className="w-full p-3 border
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

            {/* Type of Dish */}
            <label for="TypeOfDish" className="block text-lg font-semibold text-gray-800 mb-2" >Type of Dish:&nbsp;</label>
          
          <input type="text" id="TypeOfDish" name="TypeofDish" list="Dishes" className="w-full p-3 border
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
          
        </form>
      </div>


    
    </div>

  )
}


//Cusines
export default EatInFormPage