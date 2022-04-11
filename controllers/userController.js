var User = require('../models/user');
var { body,validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");


exports.user_login = function(req, res) {
    res.send('Despliega formulario Register');
};

exports.user_register = [
   
    body('nombreE' ,'Campo requerido').trim().isLength().escape(),
	body('ApePaterno','Campo requerido').trim().isLength().escape(),
	body('ApeMaterno','Campo requerido').trim().isLength().escape(),
	body('curp','Campo requerido').trim().isLength().escape(),
	body('tel','Campo requerido').trim().isLength().escape(),
	body('email','Campo requerido').trim().isLength().escape(),
	body('fechaN','Campo requerido').trim().isLength().escape(),
	body('nomVacuna','Campo requerido').trim().isLength().escape(),
	body('folio','Campo requerido').trim().isLength().escape(),

    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let data = {
                title: 'Registro de Usuario',
                messages: errors.array()
            };
            res.render('registro', data);
            return;
        } else {
            const salt=bcrypt.genSaltSync(10)
            const folio=req.body.folio
            console.log('Registrando Usuario');
            let user = new User({
                nombreE: req.body.nombreE,
                apePaterno:req.body.apePaterno,
                apeMaterno:req.body.apeMaterno,
                curp:req.body.curp,
                tel:req.body.tel,
                email: req.body.email,
                fechaN:req.body.fechaN,
                nomVacuna:req.body.nomVacuna,
                folio:bcrypt.hashSync(folio,salt)
            });

            User.find({ 'curp': req.body.curp },function(error,results){
                
                if (error) { return next(error); }
                if(results.length >= 1 ){
                  
                    let data={
                        message:'¡Este usuario ya existe!'
                    }

                    res.render('register',data);
                }else{

                    user.save(function(error){
                    if (error) { return next(error); }

                    let data= {title: 'Ingresar Sistema', message:'Bienvenido ' + req.body.nombreE}
                    res.render('index', data);
            });
        }
    });
    }
}
];

exports.user_logout = function(req, res) {
    req.session.destroy();

    let data = {
        title: 'Ingresar al Sistema',
        layout:false
    }
    res.render('login', data);   

};


