var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express by Babar Bahsir', flag: 0, items:['a','b','c','dee']});
});

module.exports = router;
