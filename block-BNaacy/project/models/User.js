var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/ },
    date: { type: Date, default: new Date() },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

var User = mongoose.model('User', user);
module.exports = User;
