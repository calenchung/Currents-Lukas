document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      '*list': groceryList,
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      document.getElementById('input_text').innerHTML = phrases;
    });
  }
}


function groceryList(list){
  var img = document.createElement('img');
      img.src = "https://bit.ly/2PLfY1S";
}
