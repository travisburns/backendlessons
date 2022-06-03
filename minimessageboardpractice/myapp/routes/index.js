var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hi there!",
    user: "Amando",
    added: new Date()
  },
{
  text: "hello World!",
  user: "Charles",
  added: new Date()
}


];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new form */
router.get('/new', function (req, res, next) {
  res.render('form', {title: 'Mini Messageboard', messages: messages });
});


/* Post new submission */
router.post('/new', function (req, res, next) {
  const { name, message } = req.body;
  messages.push({ user: name, test: message, date: new Date() });
  res.redirect('/');
});

module.exports = router;
