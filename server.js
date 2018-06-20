
const express = require('express');
  const app = express();
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  Lyric = require('./api/models/lyricModel'),
  Song = require('./api/models/songModel'),
  bodyParser = require('body-parser'),
  http = require('http'),
  socket = require('socket.io');


const cors = require('cors');
app.use(cors({ credentials: true, origin:true }));

const server = http.createServer(app)
const io = socket(server);
// io.set('origins', 'http://localhost:3001')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/4000');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const lyricRoutes = require('./api/routes/lyricRoutes'); //importing route
const userRoutes = require('./api/routes/userRoutes'); //importing route
const songRoutes = require('./api/routes/songRoutes'); //importing route

lyricRoutes(app); //register the route
userRoutes(app); //register the route
songRoutes(app); //register the route

// socket.io connection
io.on('connection', (client) => {

  client.on('joinroom', function(data){
    const room = io.sockets.adapter.rooms[data.song];
    if(!room){
      client.join(data.song)
      client.broadcast.emit('countusers', false)
      client.emit('countusers', false)
    }
    else if (room.length < 2) {
      client.join(data.song)
      client.broadcast.emit('countusers', true)
      client.emit('countusers', true)
    } else {
      client.broadcast.emit('countusers', true)
      client.emit('countusers', true)
    }
  })

  client.on('pressenter', function(data){
    console.log("this is the server")
    client.broadcast.emit('pressenter', data)
    client.emit('pressenter', data)
  })

  client.on('leaveroom', function(data){
    client.leave(data.song)
    client.broadcast.emit('countusers', false)
    client.emit('countusers', false)
  })

  client.on('disconnect', () => {
    console.log('user disconnected');
    client.broadcast.emit('countusers', false)
  });
});



server.listen(port);
console.log('keyboard karaoke battle RESTful API server started on: ' + port);
