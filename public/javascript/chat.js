document.addEventListener("DOMContentLoaded", function(event) {
  var chatForm = $('#chat-form');
  var m = $('#m');
  var messages = $('#messages');
  messages.height(chatForm.parent().height() - chatForm.height() - 7);

  chatForm.submit(function(){
    if(m.val() == "") return false;
    socket.emit('chat message', m.val());
    m.val('');
    return false;
  });

  window.addEventListener("resize", function(event) {
    messages.height(chatForm.parent().height() - chatForm.height() - 7);
  });

  socket.on('server message', function(msg){
    messages.append($('<li class="server">').text(msg));
    messages.scrollTop(messages.prop("scrollHeight"));
  });

  socket.on('chat message', function(msg){
    messages.append($('<li>').text(msg));
    messages.scrollTop(messages.prop("scrollHeight"));
  });
});
