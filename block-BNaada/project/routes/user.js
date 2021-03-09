var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/new', (req, res, next) => {
  res.render('newUser.ejs');
});

router.get('/', (req, res, next) => {
  User.find({}, (err, content) => {
    res.render('index.ejs', { data: content });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, content) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { data: content });
  });
});

router.post('/', (req, res, next) => {
  console.log();
  User.create(req.body, (err, content) => {
    if (err) {
      res.render('newUser.ejs');
      next(err);
    } else {
      res.redirect('/users');
    }
  });
});

module.exports = router;
