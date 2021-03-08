var express = require('express');
const Student = require('../models/student');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('student.ejs');
});
router.post('/', (req, res, next) => {
  Student.create(req.body, (err, content) => {
    let data = req.body;
    if (err) return next(err);
    res.render('newstudent.ejs', { data: data });
  });
});

router.get('/', (req, res, next) => {
  Student.find({}, (err, content) => {
    if (err) return next(err);
    res.render('school.ejs', { data: content });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Student.findById(id, (err, content) => {
    if (err) return next(err);
    res.render('findStudent.ejs', { data: content });
  });
});

module.exports = router;
