var express = require('express')
var router = express.Router()
var app = express()

router.use('/users', require('./users.js'))

router.get('/', function(req, res){
  res.render('index')
})

module.exports = router
