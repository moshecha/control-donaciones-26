const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.index);
router.get('/cerrarSesion', userController.cerrarSesion);

module.exports = router; 

