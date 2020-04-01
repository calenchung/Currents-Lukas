document.addEventListener("DOMContentLoaded", initialize);

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function initialize(){
  if (annyang) {
    var commands = {
      'test': effect1,
    }

    annyang.addCommands(commands);
    annyang.start();
    annyang.addCallback('result');
  }

}


function effect1() {
  document.getElementById('effect1').style.display = 'block';
  console.log('ok')
}
