let myVar = prompt("taper une phrase avec le mot maison:");
let result = myVar.indexOf("maison");

document.getElementById("exemple").innerHTML = "La position de la première occurence de ce mot est " + result + ".";