document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      // explicit
      '(I\'m) good (how are you)': doingGood,
      '(I\'m) (alright) (how are you)': doingAlright,
      '(I\'m) bad (how are you)': doingBad,

      'no': recievedNoHelp,
      '(Yes)(yeah) :employee (did)': recievedHelp,

    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      console.log(phrases);
    });

  }
}

function PlaySound(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}

var beep = document.getElementById("beep");

function doingGood(){
  document.getElementById('good').style.display = 'block';
  beep.play();
}

function doingAlright(){
  document.getElementById('alright').style.display = 'block';
  beep.play();
}

function doingBad(name, lastname) {
  document.getElementById('bad').style.display = 'block';
  beep.play();
}

function recievedNoHelp() {
  document.getElementById('no-help').style.display = 'block';
  beep.play();
}

function recievedHelp (employee){
  document.getElementById('help').innerHTML = '\"Oh yo, ' + employee + "\'s my bro.\"";
  document.getElementById('help').style.display = 'block';
  beep.play();
}
