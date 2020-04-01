document.addEventListener("DOMContentLoaded", initialize);

var synth = window.speechSynthesis;

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];
var currentVoice = 0;
window.speechSynthesis.onvoiceschanged = function() {
  voices = synth.getVoices();
}


document.body.onclick = function() {
  // document.getElementById('header').style.display = 'none';
  recognition.start();
}



function initialize(){
  if (annyang) {
    var commands = {
      '(english)': english,
      '(french)': french,
      'navigate home': home,
      'navigate pronounce': pronounce,
      '(bonjour)(hello)': hello,
      // 'ça va *splat (et toi)(et vous)': hello2,
      '*splat how are you': hello2,
      '(i\m)(i am)(okay)(fine)(good)(bad)': hello2a,
    }

    annyang.addCommands(commands);
    annyang.start();
  }
}

function french() {
  annyang.setLanguage('fr-FR');
}

function home() {
  window.location.href = "../index.html";
}

function pronounce() {
  window.location.href = "../pages/pronounce.html";
}


function english() {
  annyang.setLanguage('en');
}


function hello() {
    var utterThis = new SpeechSynthesisUtterance('bonjour, comment ça va?');
    document.getElementById('response').innerHTML = ('bonjour, comment ça va?');
    document.getElementById('response-translated').innerHTML = ('hello, how are you?');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
}

function hello2() {
    var utterThis = new SpeechSynthesisUtterance('comme ci comme ça, merci.');
    document.getElementById('response').innerHTML = ('comme ci comme ça, merci.');
    document.getElementById('response-translated').innerHTML = ('okay, thanks.');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
    console.log(event.results[0][0]);
}

function hello2a() {
    var utterThis = new SpeechSynthesisUtterance('Daccord');
    document.getElementById('response').innerHTML = ('D\'accord. Quel temp fait-il?');
    document.getElementById('response-translated').innerHTML = ('Okay. How is the weather?');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
    console.log(event.results[0][0]);
}
