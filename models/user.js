var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombreE:{type:String, required:true,minlength:5},
	apePaterno:{type:String, required:true},
	apeMaterno:{type:String, required:true},
	curp:{type:String, required:true, minlength:18,maxlength:18, unique:true},
	tel:{type:String, required:true,minlength:10,maxlength:10},
	email:{type:String, required:true,minlength:5,maxlength:30},
	fechaN:{type:Date},
	nomVacuna:{type:String,required:true},
	folio:{type:String,required:true}
});


module.exports = mongoose.model('User', UserSchema);