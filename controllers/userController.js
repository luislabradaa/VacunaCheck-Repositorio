var User = require('../models/user');
const { body,validationResult } = require('express-validator');


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
                folio:req.body.folio
            });

            user.save(function(error){
                if (error) { return next(error); }

                let data= {title: 'Ingresar Sistema', message:'Bienvenido ' + req.body.nombreE}
                res.render('index', data);
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


