var express = require('express');
var fs = require('fs');
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
  var chatbox = fs.readFileSync('views/chat.hbs');
  var musicbox = fs.readFileSync('views/player.hbs');
  res.render('stream', { chatbox_html: chatbox, musicbox_html: musicbox });
});

module.exports = router;
