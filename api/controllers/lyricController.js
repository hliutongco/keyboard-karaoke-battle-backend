'use strict';


const mongoose = require('mongoose'),
Lyric = mongoose.model('Lyrics');

exports.show_all_lyrics = function(req, res) {
  Lyric.find({}, function(err, lyric) {
    if (err)
      res.send(err);
    res.json(lyric);
  });
};

exports.create_a_lyric = function(req, res) {
  const new_lyric = new Lyric(req.body);
  new_lyric.save(function(err, lyric) {
    if (err)
      res.send(err);
    res.json(lyric);
  });
};

exports.show_a_lyric = function(req, res) {
  Lyric.findById(req.params.lyricId, function(err, lyric) {
    if (err)
      res.send(err);
    res.json(lyric);
  });
};

exports.drop_database = function(req, res) {
  mongoose.connect('http://localhost:3000/lyrics',function(){
      /* Drop the DB */
      mongoose.connection.db.dropDatabase();
  });

  res.send('Database deleted!')
}

exports.seed_lyrics = function(req, res) {
  const lyrics = [
    { lyric_order: 1, song: 'lookAtMeNow', duration: 3.0, content: "Cause I'm feelin like I'm runnin And I'm feelin like I gotta get away get away get away" },
    { lyric_order: 2, song: 'lookAtMeNow', duration: 3.3, content: "Better know that I don't and I won't ever stop Cause you know I gotta win everydayday" },
    { lyric_order: 3, song: 'lookAtMeNow', duration: 3.2, content: "See they really really wanna pop me Just know that you will never flop me" },
    { lyric_order: 4, song: 'lookAtMeNow', duration: 3.1, content: "And I know that I can be a little cocky You ain't never gonna stop me" },
    { lyric_order: 5, song: 'lookAtMeNow', duration: 2.8, content: "Everytime I come gotta set it Then I gotta go and then I gotta get it" },
    { lyric_order: 6, song: 'lookAtMeNow', duration: 2.8, content: "Then I gotta blow and then I gotta show that Any little thing that think that he be doin" },
    { lyric_order: 7, song: 'lookAtMeNow', duration: 1.4, content: "Cause it doesn't matter cause I'm gonna dadadada" },
    { lyric_order: 8, song: 'lookAtMeNow', duration: 3.0, content: "Then I'm gonna murder everything and anything A badaboom a badabing I gotta do a lotta things" },
    { lyric_order: 9, song: 'lookAtMeNow', duration: 3.7, content: "That make it clearer to a couple That I always win and then I gotta get it again And again and then again" },
    { lyric_order: 10, song: 'lookAtMeNow', duration: 2.9, content: "And I be doin it to death And now I move a little foul better call a ref" },
    { lyric_order: 11, song: 'lookAtMeNow', duration: 3.3, content: "And everybody know my style And know that I'm the best When it come to doing this and I be bangin on my chest" },
    { lyric_order: 12, song: 'lookAtMeNow', duration: 2.9, content: "And I bang in the East and I'm bangin in the West And I come to give you more and I will never give you less" },
    { lyric_order: 13, song: 'lookAtMeNow', duration: 3.5, content: "You will hear it in the street or you could read it in the press Do you really wanna know whats next let's go" },
    { lyric_order: 14, song: 'lookAtMeNow', duration: 3.2, content: "See the way we on and then we all up in the race And you know we gotta go Don't try to keep up with the pace" },
    { lyric_order: 15, song: 'lookAtMeNow', duration: 3.3, content: "And we strugglin and hustlin and sendin in and gettin in And we always gotta do it take it to another place" },
    { lyric_order: 16, song: 'lookAtMeNow', duration: 3.3, content: "Gotta taste it and I gotta grab it And I gotta cut all through this traffic" },
    { lyric_order: 17, song: 'lookAtMeNow', duration: 100.0, content: "Just to be at the top of the throne better know I gotta have it" },
    { lyric_order: 1, song: 'roar', duration: 5.2, content: "I used to bite my tongue and hold my breath Scared to rock the boat and make a mess" },
    { lyric_order: 2, song: 'roar', duration: 5.3, content: "So I sat quietly agreed politely" },
    { lyric_order: 3, song: 'roar', duration: 5.4, content: "I guess that I forgot I had a choice I let you push me past the breaking point" },
    { lyric_order: 4, song: 'roar', duration: 11.6, content: "I stood for nothing so I fell for everything" },
    { lyric_order: 5, song: 'roar', duration: 5.2, content: "You held me down but I got up Already brushing off the dust" },
    { lyric_order: 6, song: 'roar', duration: 5.6, content: "You hear my voice you hear that sound Like thunder gonna shake your ground" },
    { lyric_order: 7, song: 'roar', duration: 5.2, content: "You held me down but I got up Get ready cause I've had enough" },
    { lyric_order: 8, song: 'roar', duration: 3.0, content: "I see it all I see it now" },
    { lyric_order: 9, song: 'roar', duration: 4.5, content: "I got the eye of the tiger a fighter" },
    { lyric_order: 10, song: 'roar', duration: 5.5, content: "dancing through the fire Cause I am a champion" },
    { lyric_order: 11, song: 'roar', duration: 8.0, content: "and you're gonna hear me roar Louder louder than a lion" },
    { lyric_order: 12, song: 'roar', duration: 3.0, content: "Cause I am a champion" },
    { lyric_order: 13, song: 'roar', duration: 16.3, content: "and you're gonna hear me roar Oh oh oh oh oh oh You're gonna hear me roar" },
    { lyric_order: 14, song: 'roar', duration: 5.4, content: "Now I'm floating like a butterfly Stinging like a bee I earned my stripes" },
    { lyric_order: 15, song: 'roar', duration: 5.1, content: "I went from zero to my own hero" },
    { lyric_order: 16, song: 'roar', duration: 5.2, content: "You held me down but I got up Already brushing off the dust" },
    { lyric_order: 17, song: 'roar', duration: 5.0, content: "You hear my voice your hear that sound Like thunder gonna shake your ground" },
    { lyric_order: 18, song: 'roar', duration: 5.5, content: "You held me down but I got up Get ready cause I've had enough" },
    { lyric_order: 19, song: 'roar', duration: 3.0, content: "I see it all I see it now" },
    { lyric_order: 20, song: 'roar', duration: 4.5, content: "I got the eye of the tiger a fighter" },
    { lyric_order: 21, song: 'roar', duration: 5.5, content: "dancing through the fire cause I am a champion" },
    { lyric_order: 22, song: 'roar', duration: 8.0, content: "and you're gonna hear me roar Louder louder than a lion" },
    { lyric_order: 23, song: 'roar', duration: 3.0, content: "cause I am a champion" },
    { lyric_order: 24, song: 'roar', duration: 21.5, content: "and you're gonna hear me roar Oh oh oh oh oh oh You're gonna hear me roar Oh oh oh oh oh oh" },
    { lyric_order: 25, song: 'roar', duration: 19.0, content: "You're gonna hear me roar" },
    { lyric_order: 26, song: 'roar', duration: 4.5, content: "I got the eye of the tiger a fighter" },
    { lyric_order: 27, song: 'roar', duration: 5.5, content: "dancing through the fire Cause I am a champion" },
    { lyric_order: 28, song: 'roar', duration: 8.0, content:  "and you're gonna hear me roar Louder louder than a lion" },
    { lyric_order: 29, song: 'roar', duration: 3.0, content: "Cause I am a champion" },
    { lyric_order: 30, song: 'roar', duration: 21.0, content: "and you're gonna hear me roar Oh oh oh oh oh oh You're gonna hear me roar Oh oh oh oh oh oh" },
    { lyric_order: 31, song: 'roar', duration: 100.0, content: "You're gonna hear me roar" }
  ];

  for(let lyric of lyrics){
    const newLyric = new Lyric(lyric);
    newLyric.save();
  }

  res.send('Database seeded!')
}
