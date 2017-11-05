const express = require('express')
const app = express()
var mysql = require('mysql');
var env = process.env.NODE_ENV || 'development';
var config = require('../config')[env];

exports.connect = function () {
  var con = mysql.createConnection(config.database);

  con.connect(function(err) {
    if (err) throw err;
  });

  return con;
};
