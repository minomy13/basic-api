const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  phone: {
    mobile: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    private: {
      type: String,
      min: 6,
      max: 255,
    },
    bussiness: {
      type: String,
      min: 6,
      max: 255,
    },
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
