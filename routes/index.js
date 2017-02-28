var express = require('express'),
    router = express.Router(),
    models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  models.User.findAll({ include: [ models.Listing ] }).then(function(users) {
    res.render('index', {
      title: 'List app',
      users: users
    });
  });
});

module.exports = router;
