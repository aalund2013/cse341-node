const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  favoriteColor: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  eyeColor: {
    type: String,
    required: true
  },
  hairColor: {
    type: String,
    required: true
  },
  residesIn: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contacts',ContactSchema);