const express = require('express')
const cors = require('cors') //Import CORS
const dataRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.PORT || 5003

app.use(cors())
app.use(express.json())

app.use('/api/data', dataRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}/api/data`);
})