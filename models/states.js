var mysql = require('mysql');
var connectDB = require('./db');

exports.getStates = function (column, table, res, cb) {
  con = connectDB.connect();
  var sql = 'SELECT ' + column + ' FROM ' + table;
  console.log(sql);
  con.query(sql, function (err, result, fields) {
    if (err) throw err;

    cb(err, result, fields);
  });
};
