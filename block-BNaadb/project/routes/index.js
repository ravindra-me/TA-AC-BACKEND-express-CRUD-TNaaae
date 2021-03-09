let express = require('express');
const User = require('../models/User');
let router = express.Router();

router.get('/', (req, res, next) => {
  User.find({}, (err, content) => {
    if (err) return next(err);
    res.render('index.ejs', { data: content });
  });
});

module.exports = router;
