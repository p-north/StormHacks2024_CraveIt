const express = require('express');
const {fetchDataFromAPI} = require('../controllers/dataController')

const router = express.Router();

router.get('/', fetchDataFromAPI);

module.exports = router;