const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { 
      type: String, required: true
    },
    email: { 
        type: String, required: true, unique: true
      },
      zipcode: {
          type: Int32Array, required: true
      }
  });

  module.exports = mongoose.model('Profile', ProfileSchema);