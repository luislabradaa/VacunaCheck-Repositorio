var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombreE:{type:String, required:true},
	apePaterno:{type:String, required:true},
	apeMaterno:{type:String, required:true},
	curp:{type:String, required:true},
	tel:{type:String, required:true},
	email:{type:String, required:true},
	fechaN:{type:Date, required:true},
	nomVacuna:{type:String,required:true},
	folio:{type:String,required:true}
});

module.exports = mongoose.model('User', UserSchema);