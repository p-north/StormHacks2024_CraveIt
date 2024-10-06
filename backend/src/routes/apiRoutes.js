const express = require('express');
const {fetchDataFromAPI, receiveData} = require('../controllers/dataController')

const router = express.Router();

// Get Request for EatIn
router.get('/', fetchDataFromAPI);

//Post Request for EatIn
router.post('/', receiveData)


module.exports = router;