var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Synchronous' });
});

router.get('/chat', function(req, res) {
  res.render('chat');
});

router.get('/player', function(req, res) {
  res.render('player');
});

router.get('/stream', function(req, res) {
  res.render('stream');
});

module.exports = router;
