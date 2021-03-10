var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', (req, res) => {
  User.find({}, (err, content) => {
    res.render('listUsers', { data: content });
  });
});

router.post('/', (req, res, next) => {
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

router.put('/:id', (req, res, next) => {
  console.log(req.params.id);
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, content) => {
      if (err) next(err);
      res.render('singleUser', { data: content });
    }
  );
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, content) => {
    res.json(content);
  });
});

module.exports = router;
