var express = require('express');
var app = express();
var path = require('path');
var User = require('./model/users');
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/userDiary',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'mongoose contented to mongodb');
  }
);
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', require('./routes/user'));

// app.use((err, req, res) => {
//   res.status(400).send(err);
// });

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
