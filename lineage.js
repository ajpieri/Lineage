var express = require('express')
var app = express()

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

// var users = require('./controllers/users.js')
// var home = require('./controllers/home.js')
// app.use('/users', users)
// app.use('/', home)

app.use(require('./controllers'))
//app.use(require('./middlewares'))
//app.use(require('./controllers'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
