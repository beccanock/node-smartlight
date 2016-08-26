var express = require('express');
var router = express.Router();

var db = require('../queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/colors', db.getAllColors);
router.get('/api/last_color', db.getLastColor);
router.post('/api/colors', db.addColor);

module.exports = router;