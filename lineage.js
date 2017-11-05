var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.engine('jade', require('jade').__express)
// app.set('view engine', 'jade')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(__dirname + '/public'))

app.use(require('./controllers'))
//app.use(require('./middlewares'))

app.listen(config.server.port, function() {
  console.log('Listening on port ' + config.server.port + '...')
})
