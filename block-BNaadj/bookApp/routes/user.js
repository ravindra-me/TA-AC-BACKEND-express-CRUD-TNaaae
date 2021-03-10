var express = require('express');
var router = express.Router();
var User = require('../models/User');
var path = require('path');

router.get('/', (req, res) => {
  User.find({}, (err, content) => {
    res.render('listUsers', { data: content });
  });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  req.body.hobbies = req.body.hobbies.split(',');
  User.create(req.body, (err, content) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, content) => {
    if (err) return next(err);
    res.render('singleUser', { data: content });
  });
});

router.get('/:id/edit', (req, res, next) => {
  console.log(req.body);
  User.findById(req.params.id, (err, content) => {
    if (err) return next(err);
    // console.log(content);
    content.hobbies = content.hobbies.join(',');
    res.render('editForm', { data: content });
  });
});

router.post('/:id', (req, res, next) => {
  console.log(req.body);
  req.body.hobbies = req.body.hobbies.split(',');
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, content) => {
      if (err) return next(err);
      console.log(content);
      res.redirect(path.join('/users', req.params.id));
    }
  );
});

router.get('/:id/delete', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, content) => {
    res.redirect('/users');
  });
});

module.exports = router;
