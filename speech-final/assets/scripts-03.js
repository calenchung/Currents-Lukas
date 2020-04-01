document.addEventListener("DOMContentLoaded", initialize);


function initialize(){
  if (annyang) {
    var commands = {
      '(korean)': korean,
      '(french)': french,
    }

    annyang.addCommands(commands);
    annyang.start();
  }
}

function korean() {
  window.location.href = "../pages/pronounce-kr.html";
}

function french() {
  window.location.href = "../pages/pronounce-fr.html";
}
