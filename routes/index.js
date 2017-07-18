var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather App', gKey : process.env.gApi });
});

router.post('/', function(req, res) {

  

}); //end post

module.exports = router;
