function io(app) {
  
  app.io.on('connection', function(socket){
    
    socket.on('play', function(msg){
      console.log('play');
      socket.broadcast.emit('play', msg);
    });
  
    socket.on('pause', function(msg){
      console.log('pause');
      socket.broadcast.emit('pause', msg);
    });
  
    socket.on('seek', function(msg){
      console.log('seek');
      socket.broadcast.emit('seek', msg);
    });
  });
}

module.exports = io;
