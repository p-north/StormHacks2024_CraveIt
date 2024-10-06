const express = require('express');
const {receiveData} = require('../controllers/dataController')

const router = express.Router();

// Get Request for EatIn
// router.get('/', fetchEatInData);
// router.get('/', fetchEatOutData);

//Post Request for EatIn
router.post('/', receiveData)


module.exports = router;