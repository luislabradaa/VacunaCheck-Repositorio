var express = require('express');
var router = express.Router();

<<<<<<< HEAD
=======
var{UserSchema, validate}=require('../models/user.js')
>>>>>>> 690a1fc5f5fc2ae751bb0b9c9cd8ce6b038a8c89

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;