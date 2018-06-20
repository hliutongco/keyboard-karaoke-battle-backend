'use strict';
module.exports = function(app) {
  const song = require('../controllers/songController');

  app.route('/songs')
    .get(song.show_all_songs)

    app.route('/songs/seeds')
      .get(song.seed_songs);

  app.route('/songs/:songId')
    .get(song.show_a_song)
    .put(song.update_a_song)
};
