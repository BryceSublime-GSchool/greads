var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
function Restaurants(){
  return knex('places')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurants', function(req, res, next) {
knex.select().table('places').then(function(result){
  res.render('home', {result:result})
  })
})

router.get('/restaurants/create', function(req, res, next) {
  res.render('create')
})

router.post('/restaurants', function(req, res, next) {

  Restaurants().insert({
    name:req.body.name,
    city:req.body.city,
    state:req.body.state,
    cuisine:req.body.cuisine,
    rating:req.body.rating,
    img:req.body.img,
    bio:req.body.bio
 }, 'id').then(function(result){
     res.redirect('/restaurants');
   })
})

router.get('/restaurants/:id', function(req, res, next){
  Restaurants().where('id', req.params.id).first().then(function(result){
     var id = result.id
     var name = result.name
     var city = result.city
     var state = result.state
     var cuisine = result.cuisine
     var rating = result.rating
     var img = result.img
     var bio = result.bio
     res.render('show', {id:id, name:name, city:city, state:state, cuisine:cuisine, rating:rating, img:img, bio:bio})
 })
})

router.get('/restaurants/:id/edit', function(req, res, next){
  Restaurants().where('id', req.params.id).first().then(function(result){
       var id = result.id
       var name = result.name
       var city = result.city
       var state = result.state
       var cuisine = result.cuisine
       var rating = result.rating
       var img = result.img
       var bio = result.bio
       res.render('edit', {id:id, name:name, city:city, state:state, cuisine:cuisine, rating:rating, img:img, bio:bio})
   })
})

router.post('/restaurants/:id', function(req, res, next){
  Restaurants().where('id', req.params.id).update({
      name:req.body.name,
      city:req.body.city,
      state:req.body.state,
      cuisine:req.body.cuisine,
      rating:req.body.rating,
      img:req.body.img,
      bio:req.body.bio
    }).then(function(result){
    res.redirect('/restaurants')
  })
})
router.post('/restaurants/:id/delete', function(req, res, next){

  Restaurants().where('id', req.params.id).del().then(function(results){
    res.redirect('/restaurants')
  })
})


module.exports = router;
