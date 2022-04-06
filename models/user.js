var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Joi = require('joi');


var UserSchema = new Schema({
    nombreE:{type:String, required:true,minlength:5},
	apePaterno:{type:String, required:true},
	apeMaterno:{type:String, required:true},
	curp:{type:String, required:true, minlength:18,maxlength:18, unique:true},
	tel:{type:String, required:true,minlength:10,maxlength:10},
	email:{type:String, required:true,minlength:5,maxlength:30},
	fechaN:{type:Date, required:true},
	nomVacuna:{type:String,required:true},
	folio:{type:String,required:true}
});

function validateUser(user) {
    const schema = {
    
	nombreE:Joi.string(). required().minlength(5),
	apePaterno:Joi.string(). required().minlength(5),
	apeMaterno:Joi.string(). required().minlength(5),
	curp:Joi.string(). required().minlength(18).maxlength(18).curp(),
	tel:Joi.string(). required().minlength(10).maxlength(10),
	email:Joi.string(). required().minlength(10).maxlength(30),
	fechaN:Joi.string().required(),
	nomVacuna:Joi.string().required(),
	folio:Joi.string().required()
    };
    return Joi.validate(User, schema);
}
exports.UserSchema = UserSchema;
exports.validate = validateUser;

module.exports = mongoose.model('User', UserSchema);