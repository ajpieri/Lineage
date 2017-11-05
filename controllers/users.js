var express = require('express')
var router = express.Router()
var url = require('url');
var states = require('../models/states')

router.post('/login', function (req, res){
  console.log(req.body.user_name);
})

module.exports = router
