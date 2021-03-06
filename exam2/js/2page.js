
// variables which we use for placing specific text in popup windows.
var button1Heading = "Hostel's story";
var button1Paragraph = "Hallo, my name is Klaus Eriksen and I’m the owner of Hallo Hostel, here in Aarhus. Do you know why we are called Hallo Hostel? In fact it’s a small secret that most of our guests, never even realise. This building that you are standing in, is an old telecommunication central. When back in the days, ladies were plugging people in and out of important conversations. We still have an ambition to connect people from around the world, also with locals from Aarhus. I really hope that you enjoy your stay with us and please dial some of the other numbers to learn more about our story. See you, bye!";

var button2Heading = "Aarhus guide";
var button2Paragraph = "Hi, it’s Klaus Eriksen. I'm still the owner of Hallo Hostel. Now you've landed perfectly here in Aarhus. And I'm really happy that you did, and I am sure you've got plans to see Aros, the Old City and maybe even Moesgaard. But the weather is beautiful outside and I have recommendations for you. If you take a bike, one of our city bikes and you go down through the Latin Quarter, you go through Mejlgade, the famous cafe streets, you will pass the Old Ships Harbor, going North you will pass the beautiful forest and you will get to an old bathing institution, about 150 years old. And if you go for a swim, and you come back and show me a proof - I’ll give you cup of coffee, how is that? Take care, have a great trip. See you, bye!";

var button3Heading = "Feedback from Emily";
var button3Paragraph = "Hallo, I’m Emily! I’ve been staying in Hallo Hostel for 5 nights with my friends and it was one of the best traveling experiences. The hostel has such a lovely and cozy atmosphere, people from the hostel were very kind and caring. I even got a hug from them! Thanks to the location we could see whole Aarhus! Also, during our stay there was a movie night, we even got a free ice cream! How amazing is that? I couldn’t imagine a better place to stay and I hope you will add this place to your bucket list as well. Take care, bye-bye!";

var button4Heading = "Christina and Britney";
var button4Paragraph = "Britney: I am fine, what about you? I am going for a holiday in Aarhus soon. I am planning to stay in Hallo Hostel for a week. Christina: I'm good. Hallo Hostel is awesome! I was there once, it's really interesting place. Britney: And a location is great. Christina: Especially when it is located in the old telecomunnication building. Britney: What do you mean? Christina: You don’t know why is it called Hallo Hostel? Britney: Does it have any meaning behind? I thought it is just a catchy name. Christina: Sure, the name connects with the history of the location. They even have old dial phones laying all around the hostel. I bet you can’t count them all! Britney: Challenge accepted! I'm already looking forward to getting to know the hostel. I will call you when i am there.";

var button5Heading = "Mom";
var button5Paragraph ="Hi! Why didn’t you call for such a long time? Where are you staying right now? We haven’t heard from you since… a while. And your grandma is coming for the next week. And your dad just bought a stupid drill and I don’t know why he needs second one, then your aunt got a new cat and your uncle is allergic so I don’t understand that part, but anyhow don’t forget to send a postcard, bye!";


var button6Heading ="Phone service";
var button6Paragraph ="I told you it is broken...";


var button7Heading ="";
var button7Paragraph ="Coming soon...";



var button8Heading ="";
var button8Paragraph ="Coming soon...";



var button9Heading ="";
var button9Paragraph ="Coming soon...";



var button0Heading ="";
var button0Paragraph ="Coming soon...";


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
      document.querySelector(".popup p").innerText = null; // reset default text of paragraph to be empty

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
