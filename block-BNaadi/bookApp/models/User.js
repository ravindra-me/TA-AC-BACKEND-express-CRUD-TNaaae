var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/, required: true },
    age: Number,
    bio: String,
  },
  {
    timestamps: true,
  }
);

var User = mongoose.model('User', user);
module.exports = User;
