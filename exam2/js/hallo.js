var play = false;

var myAudio = document.getElementById("ring");
var my2Audio = document.getElementById("voice-lady");
//  sound starts and pauses on left arrow click
function onKeyDown(event) {
        switch (event.keyCode) {
            case 37: //left arrow
                if (play) {
                    myAudio.pause();
                    play = false;
                } else {
                    myAudio.play();
                    play = true;
                }
                break;
        }
  return false;
}

window.addEventListener("keydown", onKeyDown, false);

// ringing stops and voice lady sound starts on pickup button click (in popup window)
var typingTextEffect = null; // will store Typed reference
$("#pick-up").on("click",function(){
  my2Audio.currentTime = 0
  myAudio.pause();
  my2Audio.play();

  if (typingTextEffect !== null) {
    typingTextEffect.destroy();
  }

  typingTextEffect = new Typed('#move', {
    strings: ['Hello. you are calling Hallo hostel’s central and if you want to call hostels owner, please, press 1. To call reception press 2. To learn about town, press 3. If you want to hear '+
    'feedback from hostels guest, press 4. To say hi to your mom press 5. In case of problems or questions, call phone service under number 6.if you want to continue press "call". '],
    typeSpeed: 30,
    backDelay: 750, // pause before backspacing
    fadeOut: true,
    loop: false,
    showCursor: false,
    loopCount: false, // number of loops, false = infinite
  });

})

// stop sound on X press
$(".close").on("click",function(){
  my2Audio.pause();
})
