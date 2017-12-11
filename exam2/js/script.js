document.getElementById('audio').play();
//Utilizing the HTML Audio/Video DOM Reference to play audio/video
}

//to play on the key A do this(using Jquery):
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 65){
  document.getElementById('audio').play();
  }
});
