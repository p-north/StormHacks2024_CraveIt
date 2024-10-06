const express = require('express')
const dataRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = 5000

app.use(express.json())

app.use('/api/data', dataRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}/api/data`);
})