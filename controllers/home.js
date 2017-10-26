var express = require('express')
var router = express.Router()
var fs = require('fs');

// define the home page route
router.get('/', function (req, res) {
  fs.readFile('./views/home.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  //res.render('home.')
})

// define the about route
// router.get('/about', function (req, res) {
//   res.send('About users')
// })

module.exports = router
