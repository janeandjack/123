var express = require('express');
var router = express.Router();
var data = require('../data');
var hero = require('../heroes');
data.title = `Welcome to Express with Node`;

/* GET home page. */
// router.get('/heroes', function(req, res, next) {
//   res.render('index', hero[ heroes])
// });

router.get('/', function(req, res, next) {
  //console.log('data:', data);
    res.render('index', hero);
  res.render('index', {name: "CC Gaming", role: "3A Game For Sale"});
});
// 
router.get('/:user', (req, res, next) => {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
