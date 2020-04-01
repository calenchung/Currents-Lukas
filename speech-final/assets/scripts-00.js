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
      'my name is *splat (you)(name)': name,
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
    var utterThis = new SpeechSynthesisUtterance('Bonjour, comment ça va?');
    // document.getElementById('response').innerHTML = ('Bonjour, comment ça va?');
    document.getElementById('response-translated').innerHTML = ('Hello, how are you?');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
}

function hello2() {
    var utterThis = new SpeechSynthesisUtterance('Comme ci comme ça, merci. Comment tu t\'appelles?');
    // document.getElementById('response').innerHTML = ('Comme ci comme ça, merci. Comment tu t\'appelles?');
    document.getElementById('response-translated').innerHTML = ('I\'m okay, thanks. What\s your name?');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
}

function name() {
    var utterThis = new SpeechSynthesisUtterance('Enchanté. Je m\'appelle Thomas.');
    document.getElementById('response').innerHTML = ('Enchanté. Je m\'appelle Thomas.');
    document.getElementById('response-translated').innerHTML = ('Nice to meet you. My name is Thomas.');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);

    document.body.onclick = function name2() {
    var utterThis = new SpeechSynthesisUtterance('Qu\'est-ce qui préoccupe votre esprit');
    document.getElementById('response').innerHTML = ('Qu\'est-ce qui préoccupe votre esprit');
    document.getElementById('response-translated').innerHTML = ('what\'s on your mind');
    utterThis.pitch = 1;
    utterThis.rate = 1.1;
    utterThis.lang = 'fr-FR';
    synth.speak(utterThis);
  }


}
