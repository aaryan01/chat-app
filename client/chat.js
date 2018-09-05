function init() {

var socket = io.connect('http://localhost:3000');

var message = document.getElementById('message-box');
var username = document.getElementById('username');
var sendMessage = document.getElementById('message-send');
var sendUsername= document.getElementById('username-btn');
var chat = document.getElementById('chat-box');

sendUsername.click(function() {
  console.log(username.val());
  sockit.emit('change_username', {username: username.val()})
});

sendMessage.click(function(){
  socket.emit('new_mewssage', {message : message.val()})
})

socket.on("new_message", (data) =>  {
  console.log(data);
  chat.append("<p>"+ data.username + ': '+ data.message + '</p>')
});

}

init();
