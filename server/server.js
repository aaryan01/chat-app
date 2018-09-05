var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname , '../client/index.html'));
});

app.get('/chat.js', function(req, res) {
  res.sendFile(path.join(__dirname , '../client/chat.js'));
});

io.on('connection', (socket)  =>  {
  console.log('New User connected');

  socket.username = "Anonymous";

  socket.on('change_username', (data) =>  {
    socket.username = data.username;
  });

  socket.on('new_message', (data) =>  {
    io.sockets.emit('new_message', {message: data.message, username: socket.username})
  });
});

server.listen(3000, ()  =>  {
  console.log('Server starting on port 3000');
});
