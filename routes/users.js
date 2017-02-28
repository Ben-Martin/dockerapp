var express = require('express'),
  router = express.Router(),
  models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new user. */
router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

/* delete user. */
router.post('/:user_id/delete', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

/* POST new listing for a user. */
router.post('/:user_id/listings/create', function(req, res) {
  models.Listing.create({
    UserId: req.params.user_id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  }).then(function() {
    res.redirect('/');
  });
});

/* delete listing */
router.post('/:user_id/listings/delete', function(req, res) {
    models.Listing.destroy({
      where: {
        UserId: req.params.user_id
      }
    }).then(function() {
        res.redirect('/');
    });
});

module.exports = router;
