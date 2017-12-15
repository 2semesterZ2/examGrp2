
// variables which we use for placing specific text in popup windows.
var button1Heading = "Hotel history";
var button1Paragraph = "Lorem Ipsum is simply dummy text's of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy";

var button2Heading = "Aarhus guide";
var button2Paragraph = "Lorem Ipsum is simply";

var button3Heading = "Aarhus guide 33";
var button3Paragraph = "Lorem Ipsum is simpl 333y";


// function, which makes sound work on button click.
function playSound(audioName) {
       var soundElementInPopup = document.getElementById("audiotrack");
       soundElementInPopup.src = audioName;
       soundElementInPopup.play();
 }

// function, which finds div with relevant class in html file and replaces with specific text (paragraph or heading elements)
 var typingTextEffect = null; // will store Typed reference
 function setPopupText(heading, paragraph){
      // update popup heading text
      document.querySelector(".popup h2").innerText = heading;
      document.querySelector(".popup p").innerText = null; // reset default text of paragraph to be empty, otherwise typed text effect jumps ugly.

      // sound pauses on X click
      $(".close").on("click",function(){
        document.getElementById("audiotrack").pause();
      });

      // if typing effect already is running and we do not destroy it, then
      // text that it will type will be invalid
      // in order to reset already existing typing effect, we have to destroy it
      // first time this function is called, typingTextEffect will be null
      if (typingTextEffect !== null) {
        typingTextEffect.destroy();
      }

      //https://github.com/mattboldt/typed.js
      //https://mattboldt.com/typed.js/
      // reinitialize typed text effect
      typingTextEffect = new Typed('.popup p', {
        strings: [paragraph],
        typeSpeed: 30,
        backDelay: 750, // pause before backspacing
        fadeOut: true,
        loop: false,
        showCursor: false,
        loopCount: false, // number of loops, false = infinite
      });

 }
