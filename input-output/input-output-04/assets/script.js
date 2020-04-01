document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      'yes (please)' : yesRewards,
      'no (ok)' : noRewards,
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      console.log(phrases);
    });
  }
}

function noRewards() {
  document.getElementById('no-spiel').style.display = 'block';
  document.getElementById('yes-spiel').style.display = 'none';

}

function yesRewards() {
  document.getElementById('yes-spiel').style.display = 'block';
  document.getElementById('no-spiel').style.display = 'none';

}
