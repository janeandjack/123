var express = require('express');
var router = express.Router();
var data = require('../data');
// var hero = require('../heroes');
data.title = `Welcome to Express with Node`;

/* GET home page. */
// router.get('/heroes', function(req, res, next) {
//   res.render('index', hero[ heroes])
// });

router.get('/', function(req, res, next) {
  //console.log('data:', data);
  res.render('index', {name: "CC Gaming", role: "3A Game For Sale", logo: "logo.png", m1: "apex-1.png", m2: "call-1.png", m3: "dc-1.png", m4: "dota2-1.jpg", m5: "lol-1.png", m6: "mh-1.png", m7: "pubg-1.jpg", m8: "sv-1.jpg", m9: "totalwar-1.png", free: "Free", price1: "CAD $79.99", price2: "CAD $29.99", price3: "CAD $36.99", price4: "CAD $16.99", price5: "CAD $71.99"});
});
// 
router.get('/:user', (req, res, next) => {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
