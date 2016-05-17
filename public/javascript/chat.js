document.addEventListener("DOMContentLoaded", function(event) {
  var socket = io();
  var chatForm = $('#chat-form');
  var m = $('#m');
  var messages = $('#messages');
  messages.height($(window).height() - chatForm.height() - 7);

  chatForm.submit(function(){
    if(m.val() == "") return false;
    socket.emit('chat message', m.val());
    m.val('');
    return false;
  });
  socket.on('server message', function(msg){
    messages.append($('<li class="server">').text("[server]: " + msg));
    messages.scrollTop(messages.prop("scrollHeight"));
  });
  socket.on('chat message', function(msg){
    messages.append($('<li>').text(msg));
    messages.scrollTop(messages.prop("scrollHeight"));
  });
});
