var express = require('express')
  , router = express.Router()

router.use('/users', require('./users.js'))
router.use('/home', require('./home.js'))

module.exports = router
