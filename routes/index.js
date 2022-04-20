const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const controllerQR = require('../controllers/scannController');
var User = require('../models/user');

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
router.post('/code', controllerQR.verifyCode);
router.post('/recuperar', controller.user_recuperar); 

router.post("/actualizardatos/:id",(req, res)=>{
  const data = req.body;
  const id = req.params.id;
  User.updateOne({_id:id},{$set:{
    nombreE:data.Nombre,
    apePaterno:data.apePaterno,
    apeMaterno:data.apeMaterno,
    curp:data.curp,
    tel:data.tel,
    email:data.email,
    fechaN:data.fechaN,
    nomVacuna:data.nomVacuna,
    folio:data.folio
  }},(err, result)=>{
    if (err) {
      console.log("ERROR ",err.message);
    } else {
      res.redirect("/");
    }
  });
});
module.exports = router;

