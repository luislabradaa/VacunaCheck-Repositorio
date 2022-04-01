var User = require('../models/user');
var { body,validationResult } = require('express-validator');


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

// **RECUPERAR POR CURP **//

exports.user_recuperar = function(req, res){

    let curp = req.body.curp;
    console.table('Usuario: ' + curp );

    if (curp) {
        console.log('CURP');

        User.find({'curp': curp}, function(error, results){
            console.log(' Find');
            if (error) {
                console.log(' error');
                let data = {
                    title: 'Buscando en el Sistema',
                    message: 'Hubo un error contacte a soporte',
                    layout:false
                }
                res.render('/', data);                
            }

            if (results.length > 1) {
               //req.session.curp = curp;

                console.log('Hay Datos con CURP');

               usuario={
                   
                nombreE:results[0].nombreE,
                apePaterno: results[0].apePaterno,
                apeMaterno : results[0].apeMaterno,
               curp : results[0].curp,
               tel: results[0].tel,
              email: results[0].email,
              fechaN: results[0].fechaN,
              nomVacuna: results[0].nomVacuna,
              folio: results[0].folio
               }

                res.render('datos',  {User: usuario});
            } else {
                let data = {
                    title: 'Buscando en el Sistema',
                    message: 'Curp incorrecta',
                    layout:false
                }
                res.render('curp', data);   
            }


        });

    } else {
        let data = {
            title: 'Buscando en el Sistema',
            message: 'Curp vacía',
            layout:false
        }
        res.render('/', data);
    }


};


// ************************************************** //

exports.user_logout = function(req, res) {
    req.session.destroy();

    let data = {
        title: 'Ingresar al Sistema',
        layout:false
    }
    res.render('login', data);   

};


