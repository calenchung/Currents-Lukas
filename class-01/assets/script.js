var aButton = document.getElementById("myButton")

var myParagraphs = document.querySelectorAll("p.myClass")

aButton.style.color = "rgb(0,0,255)";
aButton.style.fontSize = "20px";
aButton.style.backgroundColor = "rgb(200,200,200)";

aButton.classList.add("bolder")

aButton.classList.remove("bolder")

myParagraphs.forEach(function(paragraph){

  paragraph.style.fontSize = "40px"
  paragraph.style.opacity = "0.2"
  paragraph.classList.add("bolder")
})

///////* VARIABLES */////////

  var myString = "this is a string! also works with single quotes"
  var myNumber = 1.23 * 2

  var myBoolean = true //true or false
  var myOtherBooleam = true

  var myArray = ["lists", [1, "two"], "values"]
  // arrays are 0 index based
  // console.log(myArray[2])

  var myObject = {
    key : "value",
    name: "me",
    height: "100"
  }

var myValue = 100;

if (myObject.name === "me"){
    console.log("it is!")
} else if (myObject.name === "me" && myObject.name === "yes") {
    console.log("the first is")
} else {
  console.log("who knows")
}

for (var i = 0; i < myArray.length; i++) {

  console.log(myArray[i])
  
}
