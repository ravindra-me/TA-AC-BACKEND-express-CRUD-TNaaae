var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema(
  {
    name: { type: String, minlength: 5, maxlength: 15 },
    email: { type: String, match: /@/ },
  },
  {
    timestamps: true,
  }
);

var User = mongoose.model('User', user);
module.exports = User;
