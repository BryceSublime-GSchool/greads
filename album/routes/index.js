var express = require('express');
var router = express.Router();


router.get('/albums', function(req, res, next){
res.render('albums/index');
 });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OMG ALBUMS' });
});


module.exports = router;
