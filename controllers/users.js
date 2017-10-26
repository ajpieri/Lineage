var express = require('express')
var http = require('http');
var url = require('url');
var router = express.Router()

// define the home page route
router.get('/users', function (req, res) {

  var p = url.parse(req.url, true);
  var host = p.host;
  var pathname = p.pathname;
  var search = p.search;
  var returnString = "";

  var q = p.query;
  var test = q.test;
  // var filename = q.filename;
  // var action = q.action;
  // var text = q.text;
  // var newFilename = q.newFilename

  returnString = host + "<br>"; //returns 'localhost:8080'
  returnString += pathname + "<br>"; //returns '/default.htm'
  returnString += search + "<br>"; //returns '?year=2017&month=february'

  res.send(returnString)

  //res.send('Users home page')
})

router.post('/users2', function (req, res) {

  var p = url.parse(req.url, true);
  var host = p.host;
  var pathname = p.pathname;
  var search = p.search;
  var returnString = "";

  var q = p.query;
  // var filename = q.filename;
  // var action = q.action;
  // var text = q.text;
  // var newFilename = q.newFilename

  returnString = host + "<br>"; //returns 'localhost:8080'
  returnString += pathname + "<br>"; //returns '/default.htm'
  returnString += search + "<br>"; //returns '?year=2017&month=february'

  res.send(returnString)
})

// define the about route
// router.get('/about', function (req, res) {
//   res.send('About users')
// })

module.exports = router
