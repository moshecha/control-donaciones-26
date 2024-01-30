const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/getDate', apiController.getDate);

module.exports = router; 

