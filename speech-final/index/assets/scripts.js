document.addEventListener("DOMContentLoaded", initialize);

var video = document.querySelector("#videoElement");
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}


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

// document.body.onclick = function() {
//   quests.start();
// }


var quests = ["how confident are you for the future?", "when did you last see a friend in person?", "how was your day?", "did you get some fresh air today?", "what do you miss most?"],
    i = -1;
(function f(){
    i = (i + 1) % quests.length;
    document.getElementById('questions').innerHTML = quests[ i ] + '<br/>';
    setTimeout(f, 10000);
 })();

 quests.onresult = function(quests) {
   var spoken = quests.results[0][0].transcript;
   diagnostic.textContent = quests;
   var utterThis = new SpeechSynthesisUtterance(diagnostic.textContent);
   utterThis.lang = 'en-EN';
   utterThis.voice = voices[0];
   utterThis.pitch = .9;
   utterThis.rate = 1.1;
   synth.speak(utterThis);
   console.log(speechSynthesis.getVoices());
 }


function initialize(){
  if (annyang) {
    var commands = {
      'test': effect1,
      'red': effect2,
      'white': effect3,
      'clear': noEffect2,
      'month': ts1,
      'year': ts2,
      'day': ts3,
      'not': ts4,
      'scared': ts5,
      'a little': ts6,
      'bad': ts7,
      'touch': ts8,
      'physical': ts9,
      'sunlight': ts10,
    }

    annyang.addCommands(commands);
    annyang.start();
    annyang.addCallback('result');
  }

}

function ts1() {
  document.getElementById('month').style.display = 'block';

}



function noEffect2() {
  document.getElementById('effect2').style.display = 'none';
  console.log('ok clear')
}

function effect2() {
  document.getElementById('effect2').style.display = 'block';
  console.log('ok')
}


function effect1() {
var tracker = new tracking.LandmarksTracker();
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

tracking.track('#videoElement', tracker);

tracker.on('track', function(event) {

  context.clearRect(0,0,canvas.width, canvas.height);

  if(!event.data) return;

    event.data.landmarks.forEach(function(landmarks) {
      for(var l in landmarks){
        context.beginPath();
        context.fillStyle = "#00fffb";
        context.arc(landmarks[l][0],landmarks[l][1],50,1,2*Math.PI);
        context.fill();
      }
    });

});

var gui = new dat.GUI();
gui.add(tracker, 'edgesDensity', 10, 10).step(0.01).listen();
gui.add(tracker, 'initialScale', 10, 20.0).step(0.1).listen();
gui.add(tracker, 'stepSize', 100, 50).step(0.1).listen();
}


function effect3() {
var tracker = new tracking.LandmarksTracker();
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

tracking.track('#videoElement', tracker);

tracker.on('track', function(event) {

  context.clearRect(0,0,canvas.width, canvas.height);

  if(!event.data) return;

    event.data.faces.forEach(function(rect) {
      context.strokeStyle = '#ffffff';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });

    event.data.landmarks.forEach(function(landmarks) {
      for(var l in landmarks){
        context.beginPath();
        context.fillStyle = "#ffffff";
        context.arc(landmarks[l][0],landmarks[l][1],5,1,2*Math.PI);
        context.fill();
      }
    });

});

var gui = new dat.GUI();
gui.add(tracker, 'edgesDensity', 10, 10).step(0.01).listen();
gui.add(tracker, 'initialScale', 10, 20.0).step(0.1).listen();
gui.add(tracker, 'stepSize', 100, 50).step(0.1).listen();
}
