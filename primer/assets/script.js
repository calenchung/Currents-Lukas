var myButton = document.getElementById("click_me");



function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
function picture(event) {
	var img = document.createElement('img');
	img.setAttribute("style", "position:fixed;");
	img.setAttribute("src", "assets/images/patrick.gif");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}



// function picture(event){
//
// 	var pic = "assets/images/patrick.gif";
// 	document.getElementById('pic').style.display='block';
// 	var pic2 = "assets/images/castle.gif";
// 	document.getElementById('pic2').style.display='block';
//
// }

myButton.addEventListener('click', picture);
