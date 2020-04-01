document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      'i (also)(would)(also)(like)(want)(an)(the)apple (please)': showApple,
      'i (also)(would)(also)(like)(want)(a)(the)banana (please)': showBanana,
      'i (also)(would)(also)(like)(want)(an)(the)orange (please)': showOrange,

      'yes': checkout,
      'no': noCheckout,
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      document.getElementById('input_text').innerHTML = phrases;
    });
  }
}



function showApple() {
    var img = document.createElement('img');
    img.src = "https://pngimg.com/uploads/apple/apple_PNG12509.png";
    img.style.width = "50vw";
    img.style.position = "absolute";
    img.style.marginLeft = "24vw";
    document.body.appendChild(img);
    document.getElementById('apple').style.display = 'none';
    document.getElementById('promptCheckout').style.display = 'block';
}

function showBanana() {
    var img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/proxy/Oe1ebzC5zV-TJnu2IfzJzTdkCV0P7xxLxQwrYP7SuYmqwyL7A3PLeeyZkEwS53LfeavHrLdA3248r_1HmtP6ka6xXhMaVslVZwFXBxe4tHwgzuXj6SMSpIDs9XwxELaItGfYGrk";
    img.style.width = "50vw";
    img.style.marginLeft = "24vw";
    img.style.position = "absolute";
    document.body.appendChild(img);
    document.getElementById('banana').style.display = 'none';
    document.getElementById('promptCheckout').style.display = 'block';
}

function showOrange() {
    var img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/proxy/p_IUXSnKcXXg9ET9IseZxjlqSR1LfSzniZLJoml2Dj3uI0wtHHs0JhnVxiQzbq9_UEtcDewd3XZPzJEqtv85wntepxjYz_dRj3tKOvYA4HPeRbuffCg32bxcjA";
    img.style.width = "50vw";
    img.style.marginLeft = "24vw";
    img.style.position = "absolute";
    document.body.appendChild(img);
    document.getElementById('orange').style.display = 'none';
    document.getElementById('promptCheckout').style.display = 'block';
}

function checkout() {
    var img = document.createElement('img');
    img.src = "https://www.pngkey.com/png/full/53-536755_sam4s-er380-cash-register-sam4s-er-420-cash.png";
    img.style.width = "50vw";
    img.style.marginLeft = "24vw";
    img.style.position = "absolute";
    document.body.appendChild(img);
    document.getElementById('total').style.display = 'block';
    document.getElementById('market').style.display = 'none';
    document.getElementById('promptCheckout').style.display = 'none';
}

function noCheckout() {
    document.getElementById('promptCheckout').style.display = 'none';
}


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();


var price =
document.getElementById("price").innerHTML = Math.floor(Math.random() * 1000);
