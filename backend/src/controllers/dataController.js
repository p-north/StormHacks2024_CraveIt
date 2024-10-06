require('dotenv').config();

exports.fetchDataFromAPI = async (req, res) =>{
    try{
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2827,-123.1207&radius=1500&type=restaurant&key=${process.env.API_KEY}`,{
            method: 'GET',
            headers:{
                // 'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

         // Handle HTTP errors
         if (!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);


    } catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
}