//--------speechSynthesis

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

//-------speechRecognitionList

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'ko-KR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');

//--------speechRecognitionList

document.body.onclick = function() {
  recognition.start();
  document.getElementById('directions').style.display = 'none';
}

recognition.onresult = function(event) {
  var spoken = event.results[0][0].transcript;
  diagnostic.textContent = spoken;
  var utterThis = new SpeechSynthesisUtterance(diagnostic.textContent);
  utterThis.lang = 'ko-KR';
  utterThis.voice = voices[58];
  utterThis.voiceURI =  "Google 한국의";
  utterThis.pitch = 1;
  utterThis.rate = .9;
  synth.speak(utterThis);
  console.log(speechSynthesis.getVoices());
}

recognition.onspeechend = function() {
  recognition.stop();
}
