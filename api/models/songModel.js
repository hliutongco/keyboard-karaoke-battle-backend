'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SongSchema = new Schema({
  title: {
    type: String
  },
  highscore: {
    type: Number
  },
  player: {
    type: String
  }
});

module.exports = mongoose.model('Songs', SongSchema);
