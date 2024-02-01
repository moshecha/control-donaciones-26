const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// router.get('/getDate', apiController.getDate);

// registro, login y recuperar password
router.post('/apiLogin', apiController.apiLogin);
router.post('/apiRegistro', apiController.apiRegistro);
router.post('/apiRecuperarPassword', apiController.apiRecuperarPassword); // envia el email con el link
router.post('/apiUpdatePassword', apiController.apiUpdatePassword); //cambia la clave en la db
router.post('/apiGuardarNombreDispositivoVinculado', apiController.apiGuardarNombreDispositivoVinculado); //guarda nombre dispositivo


module.exports = router; 

