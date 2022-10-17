let prenom;
let tableau = [];
let nombre = -1;

do 
{
    prenom = prompt("Indiquez un prénom:");
    tableau.push(prenom);
    nombre++

}

while (prenom != "")

alert("Vous avez saisi : "+ tableau + " il y a en tout : " + nombre + " prénom(s)");