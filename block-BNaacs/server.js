var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'mongoose contented to mongodb');
  }
);
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  let data = {
    name: 'Ravindra Singh',
    class: '12th',
  };
  res.render('index.ejs', { data: data });
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
