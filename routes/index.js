const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

var User = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VacunaCheck' });
});

/* GET registro page.*/
router.get('/register', function(req, res){
  res.render('register', {title: 'Registro'});
})

/* GET  recuperar page */
router.get('/recuperar', function(req, res){
  res.render('recuperar',{title: 'RecuperarQR'});
})

/* GET  actualizar page */
router.get('/actualizar', function(req, res){
  res.render('actualizar',{title: 'Actualizar información'});
})

/* GET consulta page */
router.get('/consulta', function(req, res){
  res.render('consulta', {title: 'Consultar'});
})

/* GET leerQR page */ 
router.get('/leerQr', function(req,res){
  res.render('leerQr', {title: 'LeerQR'});
})

router.get('/logout', controller.user_logout);
router.post('/index', controller.user_register); 
router.post('/register', controller.user_register); 

router.get('/register', function(req, res, next){
  let data = {
      title: 'Registrar Usuario',
      layout:false
    }

  res.render('register', data);
});
module.exports = router;
