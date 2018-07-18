var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');

router.use(expressJWT({secret: process.env.SECRET_KEY}).unless({path: ['/', '/users/login']}));

module.exports = router
