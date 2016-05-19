document.addEventListener("DOMContentLoaded", function(event) {
  var audio = document.getElementById("audioplayer");
  var seeking = false;

  // Listen events
  socket.on('play', function(msg) {
    audio.play();
  });
  socket.on('pause', function(msg) {
    audio.pause();
  });
  socket.on('seek', function(time) {
    audio.currentTime = time;
  });

  // User events
  audio.addEventListener("play", function(event) {
    socket.emit("play");
  });
  audio.addEventListener("pause", function(event) {
    socket.emit("pause");
  });
  audio.addEventListener("seeking", function(event) {
    seeking = true;
  });
  audio.addEventListener("seeked", function(event) {
    if (seeking)
      socket.emit("seek", audio.currentTime);
    seeking = false;
  });
});
