'use strict';
module.exports = function(app) {
  const lyric = require('../controllers/lyricController');

  app.route('/lyrics')
    .get(lyric.show_all_lyrics)
    .post(lyric.create_a_lyric);

  app.route('/lyrics/seeds')
    .get(lyric.seed_lyrics);

  app.route('/lyrics/delete')
    .get(lyric.drop_database);

  app.route('/lyrics/:lyricId')
    .get(lyric.show_a_lyric);
};
