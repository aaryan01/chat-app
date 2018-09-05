var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000, ()  =>  {
  console.log('Server starting on port 3000');
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '../client/index.html');
});
