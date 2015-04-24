var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('public/index');
});

router.get('/avalon', function(req, res, next) {
  res.render('avalon');
});

module.exports = router;