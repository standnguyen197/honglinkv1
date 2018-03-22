var mongoose = require('mongoose');

var CodeSchema = new mongoose.Schema({
  _id: String,
  title: String,
  link: String,
  code: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Code', CodeSchema);
