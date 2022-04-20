const express = require('express');
const app = express();
var User = require('../models/user');
var { body,validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const src = require('debug');
const QRCode = require('qrcode');


exports.verifyCode = (function(req, res) {
    
   res.json({ vacunado: 'Estas vacunado' });

});