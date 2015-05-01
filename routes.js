var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('public/index');
});

router.get('/avalon', function(req, res, next) {
  res.render('avalon');
});

router.get('/communivoice', function(req, res, next) {
  res.render('communivoice');
});

router.get('/phonebell', function(req, res, next) {
  res.render('phonebell');
});

router.get('/OpenSesame', function(req, res, next) {
  res.render('OpenSesame');
});
module.exports = router;