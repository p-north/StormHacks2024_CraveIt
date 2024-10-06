require('dotenv').config();

exports.fetchDataFromAPI = async (req, res) =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        });

         // Handle HTTP errors
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);


    } catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
}