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
>>>>>>> 7248a69177a25727604d3a53985b1e522efe2400

});