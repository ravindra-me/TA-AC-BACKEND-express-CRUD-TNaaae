var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var student = new Schema(
  {
    name: String,
    email: { type: String, match: /@/, minlength: 5 },
  },
  { timestamps: true }
);
var Student = mongoose.model('Student', student);
module.exports = Student;
