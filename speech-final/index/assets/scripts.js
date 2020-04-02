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


function firstQuestion() {
  var quests = ["how confident are you for the future?", "when did you last see a friend in person?", "how was your day?", "did you get some fresh air today?", "what do you miss most?"];
  var randomIndex = Math.floor(Math.random()*quests.length);
  var randomQuestion = quests[randomIndex];  document.getElementById('questions').innerHTML = (randomQuestion);
      var utterThis = new SpeechSynthesisUtterance(randomQuestion);
      utterThis.lang = 'en-EN';
      utterThis.voice = voices[49];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
}


window.onclick = function() {
  var quests = ["how confident are you for the future?", "when did you last see a friend in person?", "how was your day?", "did you get some fresh air today?", "what do you miss most?"];
  var randomIndex = Math.floor(Math.random()*quests.length);
  var randomQuestion = quests[randomIndex];  document.getElementById('questions').innerHTML = (randomQuestion);
      var utterThis = new SpeechSynthesisUtterance(randomQuestion);
      utterThis.lang = 'en-EN';
      utterThis.voice = voices[49];
      utterThis.pitch = .9;
      utterThis.rate = 1;
      synth.speak(utterThis);
}



function initialize(){
  if (annyang) {
    var commands = {
      '*splat touch *splat': effect1,
      '*splat* think *splat': effect2,
      '*splat faces': effect3,
      'i don\'t know': effect4,
      '*splat* what *splat': effect5,
      '*splat not *splat': noEffects,
      '*splat thanks *splat': ts1,
      '*splat year': ts2,
      // '*splat day *splat': ts3,
      // '*splat days *splat': ts3,
      // 'not': ts4,
      // 'scared': ts5,
      // 'a little': ts6,
      // 'bad': ts7,
      // 'touch': ts8,
      // 'physical': ts9,
      // 'sunlight': ts10,
    }

    annyang.addCommands(commands);
    annyang.start();
    annyang.addCallback('result');
  }

}



function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}



function ts1() {
  var word = document.getElementById('thanks');
  document.body.appendChild(thanks);
  var xy = getRandomPosition(thanks);
  word.style.bottom = xy[1] + 'px';
  word.style.left = xy[1] + 'px';
  document.getElementById('thanks').style.display = 'block';
}

function ts2() {
  var word2 = document.getElementById('year');
  document.body.appendChild(year);
  var xy = getRandomPosition(year);
  word2.style.top = xy[1] + 'px';
  word2.style.left = xy[1] + 'px';
  document.getElementById('year').style.display = 'block';
}


//-----------------//-----------------//-----------------
//---END OF TRANSLATED WORDS -> START OF EFFECTS-----
//-----------------//-----------------//-----------------


function noEffects() {
  document.getElementById('no').style.display = "none";
}

function effect5() {
  document.getElementById('effect5').style.display = 'block';
}

function effect4() {
  document.getElementById('effect4').style.display = 'block';
}

function effect2() {
  document.getElementById('effect2').style.display = 'block';
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
