
// variables which we use for placing specific text in popup windows.
var button1Heading = "Hostel's story";
var button1Paragraph = "Lorem Ipsum is simply dummy text's of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy";

var button2Heading = "Aarhus guide";
var button2Paragraph = "Hi, it’s Klaus Eriksen. I'm still the owner of Hallo Hostel. Now you've landed perfectly here in Aarhus. And I'm really happy that you did, and I am sure you've got plans to see Aros, the Old City and maybe even Moesgaard. But the weather is beautiful outside and I have recommendations for you. If you take a bike, one of our city bikes and you go down through the latin corner, you go through DANISH WORD, the famous cafe streets, you will pass the old ships harbor, going North you will pass the beautiful forest and you will get to an old bathing institution, about 150 years old. And if you go for a swim, and you come back and show me a proof. I’ll give you cup of coffee, how is that? Take care, have a great trip. See you, bye!";

var button3Heading = "Feedback from Emily";
var button3Paragraph = "Lorem Ipsum is simpl 333y";

var button4Heading = "Mommy";
var button4Paragraph ="blablabla";

var button5Heading = "Broken line";
var button5Paragraph ="I told you it's broken";

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
        typeSpeed: 45,
        backDelay: 750, // pause before backspacing
        fadeOut: true,
        loop: false,
        showCursor: false,
        loopCount: false, // number of loops, false = infinite
      });

 }
