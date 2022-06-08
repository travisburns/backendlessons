var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cool', (req, res, next)=> {
  res.render("you're so cool");
});


module.exports = router;
