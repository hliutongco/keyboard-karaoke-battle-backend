'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  roar: {
    type: Number,
    default: 0
  },
  lookAtMeNow: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Users', UserSchema);
