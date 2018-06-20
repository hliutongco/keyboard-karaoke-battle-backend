'use strict';


const mongoose = require('mongoose'),
Song = mongoose.model('Songs');

exports.show_all_songs = function(req, res) {
  Song.find({}, function(err, song) {
    if (err)
      res.send(err);
    res.json(song);
  });
};

exports.show_a_song = function(req, res) {
  Song.findById(req.params.songId, function(err, song) {
    if (err)
      res.send(err);
    res.json(song);
  });
};

exports.update_a_song = function(req, res) {
  Song.findOneAndUpdate({_id: req.params.songId}, req.body, {new: true}, function(err, song) {
    if (err)
      res.send(err);
    res.json(song);
  });
};

exports.seed_songs = function(req, res) {
  const songs = [
    { title: 'roar', highscore: 0, player: "n/a" },
    { title: 'lookAtMeNow', highscore: 0, player: "n/a" }
    ];

  for(let song of songs){
    const newSong = new Song(song);
    newSong.save();
  }

  res.send('Database seeded!')
}
