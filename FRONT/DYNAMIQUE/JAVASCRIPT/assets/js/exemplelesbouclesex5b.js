let myVar = prompt("taper un mot:");
let result = myVar.substring(2,3);

document.getElementById("exemple").innerHTML = "Voilà un morceau de votre mot " + result + ".";