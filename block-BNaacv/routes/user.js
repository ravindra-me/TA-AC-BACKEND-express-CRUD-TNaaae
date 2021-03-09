var express = require('express');
var User = require('../model/users');
var route = express.Router();

route.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

route.post('/', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, content) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { data: content });
  });
});

route.get('/', (req, res, next) => {
  User.find({}, (err, content) => {
    if (err) return next(err);
    res.render('users.ejs', { data: content });
  });
});

route.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, content) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { data: content });
  });
});

route.put('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, content) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { data: content });
  });
});

route.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, content) => {
    if (err) {
      return next(err);
    }
    res.send(`delete the users name is ${content.name}`);
  });
});

module.exports = route;
