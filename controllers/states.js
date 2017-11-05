var express = require('express')
var router = express.Router()
var url = require('url');
var states = require('../models/states')

router.get('/', function (req, res){
  var p = url.parse(req.url, true);
  var q = p.query;
  var column = q.column;
  var table = q.table;

  states.getStates(column, table, res, function (err, result, fields) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    //res.send(result);
    res.end();
  });
})

module.exports = router
