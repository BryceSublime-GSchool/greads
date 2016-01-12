var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Album = knex('albums');




router.get('/albums', function(req, res, next) {
  res.render('albums/index');
});

router.get('/albums/new', function(req, res, next) {
  res.render('albums/new');
});

// router.post('/albums', function(req, res, next) {
//   res.redirect('/albums');
// });

router.post('/albums', function(req, res, next) {
  Album.insert({ name:req.body.album_name }).then(function () {
    res.redirect('/albums');
  });
});


module.exports = router;
