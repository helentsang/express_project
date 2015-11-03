var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Helen\'s home page', text: 'Hello!'});
});

// accept POST request on the homepage
router.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
