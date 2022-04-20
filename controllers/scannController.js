<<<<<<< HEAD
const express = require('express');
const app = express();
var User = require('../models/user');
var { body,validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const src = require('debug');
const QRCode = require('qrcode');


exports.verifyCode = (function(req, res) {
    
   res.json({ vacunado: 'Estas vacunado' });

=======
exports.verifyCode = (function(req, res) {
    res.json({vacunado: 'Estas vacunado' });
>>>>>>> c67741df6e81ea1155edd87311afc8da4cb64c7d
});