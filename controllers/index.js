var express = require('express')
var router = express.Router()

router.use('/', require('./home.js'));
router.use('/users', require('./users.js'));
router.use('/states', require('./states.js'));

module.exports = router
