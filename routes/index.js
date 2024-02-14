var express = require('express');
const userModel = require('./users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/hello', function(req, res, next){
  res.render('hii')
})
router.post('/', function(req, res, next){
  const {name, message} = req.body;
  const userdata = new userModel({name, message})
  let usercreate = userModel.create(userdata);
  res.render("index");
})

module.exports = router;
