'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LyricSchema = new Schema({
  content: {
    type: String
  },
  lyric_order: {
    type: Number
  },
  duration: {
    type: Number
  },
  song: {
    type: String
  }
});

module.exports = mongoose.model('Lyrics', LyricSchema);
