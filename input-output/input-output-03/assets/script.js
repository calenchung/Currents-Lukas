document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      'I want (the) :meat (please)' : meatConvo,
      'Do you have (some) :meat' : meatConvo,
      'Can I have (some) :meat (please)' : meatConvo,

      '*pounds (pounds)(please)' : lbsAnswer,
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      console.log(phrases);
    });
  }
}


function meatConvo(meat) {
  document.getElementById('intro').style.display = 'none';
	console.log("Here is your " + meat);
  document.getElementById('meat').innerHTML = "Of course. How many pounds of " + meat + " would you like?";
}

function lbsAnswer() {
  var img = document.createElement('img');
    img.src = "assets/meat.jpg";
    img.style.width = "50vw";
    img.style.position = "absolute";
    img.style.marginLeft = "24vw";
    document.body.appendChild(img);
  document.getElementById('intro').style.display = 'none';
  document.getElementById('meat').style.display = 'none';
	console.log("Here you go");
  document.getElementById('lbs').innerHTML = "Ok. Here you go!";
}
