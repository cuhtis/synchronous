function io(app) {
  var id = 0;
  
  app.io.on('connection', function(socket){
    var myId = id++;
    var myName = "guest" + myId;
    console.log('a user connected');
    app.io.emit('server message', myName + ' has connected.');
  
    socket.on('chat message', function(msg){
      app.io.emit('chat message', myName + ': ' + msg);
    });
  
    socket.on('disconnect', function(msg){
      console.log('disconnect');
      socket.broadcast.emit('server message', myName + ' has disconnected.');
    });
  });
}

module.exports = io;
