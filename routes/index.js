var express = require('express');
const users = require('./users');
const userModel = require('./users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/hello', function(req, res, next){
  res.render('hii')
})
router.post('/thanks', function(req, res, next){
  const message = req.body;
  const userdata = new userModel(message)
  let usercreate = userModel.create(userdata);
  res.render("index");
})

module.exports = router;
