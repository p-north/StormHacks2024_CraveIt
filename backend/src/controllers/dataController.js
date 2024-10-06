require('dotenv').config();

// exports.fetchDataFromAPI = async (req, res) =>{
//     try{
//         const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2827,-123.1207&radius=1500&type=restaurant&key=${process.env.API_KEY}`,{
//             method: 'GET',
//             headers:{
//                 // 'Authorization': `Bearer ${process.env.API_KEY}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//          // Handle HTTP errors
//          if (!response.ok)
//         {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         res.json(data);


//     } catch(error){
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Error fetching data from API' });
//     }
// }

function getRandomIntMax(max) {
    return Math.floor(Math.random() * max);
}

// Fetch data for eat in
const fetchEatInData = async (attributes) =>{
    const cuisine1 = attributes.cuisine
    const dish1 = attributes.dish1
    const dish2 = attributes.dish2
    const dish3 = attributes.dish3
    console.log("eat in called")
    //Fetch the api
    // const respone = await fetch(`API-URL`,{
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

    // if(!respone.ok){
    //     throw new Error(`HTTP error! status: ${respone.status}`);

    // }

    // return await respone.json()
    let common_meal = {};
    try{
        // let CUISINE;
        // let DISH1;
        // let DISH2;
        // let DISH3

        const DISH1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dish1}`);
        const DISH2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dish2}`);
        const DISH3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dish3}`);
        const cuisine = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine1}`);
        
        if(!DISH1.ok){
            throw new Error ("Unable to Fetch Data");
        }

        if(!DISH2.ok){
            throw new Error ("Unable to Fetch Data");
        }

        if(!DISH3.ok){
            throw new Error ("Unable to Fetch Data");
        }

        if(!cuisine.ok){
            throw new Error ("Unable to Fetch Data");
        }


        const data_DISH1= await DISH1.json();
        const data_DISH2= await DISH2.json();
        const data_DISH3= await DISH3.json();
        const data_cuisine = await cuisine.json();
        
        // console.log(data_dish.meals[1].strMeal);
        // console.log("\n\n\n\n---------------------------------------");
        // console.log(data_cuisine.meals[1].strMeal);

        //Common meal between prefered dishes and cusine to be returned
       

        //Length of meals in Cuisine
        const outer_iteration = data_cuisine.meals.length;
        


        //Length of meals in dish 1
        const inner_iteration1 = data_DISH1.meals.length;
        //Length of meals in dish 1
        const inner_iteration2 = data_DISH2.meals.length;
        //Length of meals in dish 1
        const inner_iteration3 = data_DISH3.meals.length;

        //Indexes for dish 1 that have the desired cuisine
        let first_indexes = [];
        //Indexes for dish 2 that have the desired cuisine
        let second_indexes = [];
        //Indexes for dish 3 that have the desired cuisine
        let third_indexes = [];
        
        //Checking Cusine element against elements in DISH3
        for(let i=0; i<outer_iteration; i+=1){
            
              
            for(let z = 0; z<inner_iteration3; z+=1){
                if(data_cuisine.meals[i].strMeal === data_DISH3.meals[z].strMeal){
                    third_indexes.push(z);
               
                }
               
            }
            
           
        }

         //Checking Cusine element against elements in DISH2
        for(let i=0; i < outer_iteration; i+=1){
            for(let y = 0; y<inner_iteration2; y+=1){
                if(data_cuisine.meals[i].strMeal === data_DISH2.meals[y].strMeal){
                    second_indexes.push(y);
                }
                
            }
            
           
        }

          // Checking Cusine element against elements in DISH1
        for(let i=0; i<outer_iteration; i+=1){
            for(let x = 0; x<inner_iteration1; x+=1){
                
                if(data_cuisine.meals[i].strMeal === data_DISH1.meals[x].strMeal){
                    first_indexes.push(x);
                }
            
            }
           
        }

        //If common elements are in first dish array we pick one of them randomly
        if(first_indexes.length>0){
            let randomElement = getRandomIntMax(first_indexes.length);
            let index= first_indexes[randomElement];
            common_meal = data_DISH1.meals[index];
        }


        //If common elements are in second dish array we pick one of them randomly
        else if (second_indexes.length>0){
            let randomElement = getRandomIntMax(second_indexes.length);
            let index= second_indexes[randomElement];
            common_meal = data_DISH2.meals[index];
        }

         //If common elements are in third dish array we pick one of them randomly
        else if (third_indexes.length>0){
            let randomElement = getRandomIntMax(third_indexes.length);
            let index= third_indexes[randomElement];
            common_meal = data_DISH3.meals[index];
        }

   
    }

   

    catch(fetch_error){
        console.error(fetch_error)
    }


        let id = common_meal.idMeal;


        const testing = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        common_meal= await testing.json();

        console.log(common_meal.meals[0].strInstructions);

        return common_meal.meals[0];


};

// Function to fetch data for eat out
const fetchEatOutData = async (attributes) =>{
    const cuisine = attributes.cuisine;
    const price = attributes.price;
    const address = attributes.address;
    const rating = attributes.rating;
    console.log("eat out is called", cuisine, price, address, rating)
    // Add pluses to the address
    let plusString = ""
    let wasSpace = false
    for(let ch of address){
    if(ch == " "){
        if(!wasSpace){

            plusString+="+"
        }
        wasSpace = true
        
    }
    else{

        plusString += ch
        wasSpace = false
    }

    
}


    // Fetch the api
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cuisine}+${plusString}&key=${process.env.API_KEY}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // if(!response.ok){
    //     throw new Error(`HTTP error! status: ${response.status}`)
    // }

    const data = await response.json();

    // console.log("data is: ", data)
    
    // // Return only the first 3 results, if available
    // const firstThreeResults = data?.results.filter((value) => {
    //     return value.rating >= rating.length
    // }).slice(0, 3); // This will return an empty array if results is undefined
    
    // // Return only the first 3 results, if available
    const firstThreeResults = data?.results.slice(0, 3); // This will return an empty array if results is undefined
    

    return firstThreeResults; // Return the first three results


}

// POST THE EATIN
exports.receiveData = async (req, res) =>{
    const receivedData = req.body
    console.log('Data received from React fronten:', receivedData)

    try{
        let apiResponse;
        if(receivedData.type === 'eat-in'){
            console.log('Received data for eat-in')
            apiResponse = await fetchEatInData(receivedData);
        }
        else{
            console.log('Recieved data for eat-out')
            apiResponse = await fetchEatOutData(receivedData);

        }

        console.log("apidata", apiResponse)

        // send the retrieved data back to the frontend
        res.status(200).json({message: 'Data retrived successfully', apiData: apiResponse});
    } catch (error){
        console.log('Error fetching data:', error);
        res.status(500).json({error: 'Error fetching data from API'});
    }



}