var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var Student = require('./models/student');
mongoose.connect(
  'mongodb://localhost:27017/school',
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

app.use('/students', require('./routes/studentRout'));

app.use((err, req, res) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
