var express = require('express');
var router = express.Router();
//Validacion de usuario 

var{UserSchema, validate}=require('../models/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//validacion

router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // checar si el usuario no existe
    let user = await user.findOne({ curp: req.body.curp });
    if (user) {
      
         alert('Este usuario ya existe!');

    } else {
        // inserta el usuario si no existe 
          user = new UserSchema({
          nombreE: req.body.nombreE,
          apePaterno:req.body.apePaterno,
          apeMaterno:req.body.apeMaterno,
          curp:req.body.curp,
          tel:req.body.tel,
          email: req.body.email,
          fechaN:req.body.fechaN,
          nomVacuna:req.body.nomVacuna,
          folio:req.body.folio
        });
        await user.save();
        res.send(user);
    }
});

module.exports = router;