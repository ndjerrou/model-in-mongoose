const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  name: String,
  last_vaccine: Date,
});

module.exports = mongoose.model('chat', chatSchema);
