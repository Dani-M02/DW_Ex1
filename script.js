//NOME DANIELA
var imageSources = ["IMG/name1.png", "IMG/name2.png", "IMG/name3.png"]

var index = 0;

setInterval(function () {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("nome").src = imageSources[index];
  index++;
}, 500);



////////////Imagens espalhadas
var divs = document.getElementsByClassName('back');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(-500, winHeight);
    randomLeft = getRandomNumber(-500, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}


