const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();  //Create express app


//Middleware
app.use(express.json()); //Parseincoming JSON requests

app.get('/', (req, res)=>{
    res.send('Welcome to API')
})

app.use('/api/data', apiRoutes)

module.exports = app
