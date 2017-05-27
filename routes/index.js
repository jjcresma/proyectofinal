var express = require('express');
var router = express.Router();
var objeto = {title:"avances de computacion", visitante:"Master" , carrera:"sistema",semestre:"noveno"};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', objeto);
});

module.exports = router;
