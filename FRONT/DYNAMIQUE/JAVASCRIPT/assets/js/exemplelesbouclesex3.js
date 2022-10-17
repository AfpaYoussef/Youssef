let nombresentier1;
var nombre3 =0;
let nombre4 =0;
let compteur =-1;

while (nombresentier1 != 0) {
nombresentier1 = parseInt(prompt("Indiquer un nombre entier :"));
nombre3 = nombre3 + nombresentier1;
compteur++;
console.log (compteur);
}


nombre4 = nombre3 / compteur;

alert("La somme de vos entiers est " + nombre3 + " et sa moyenne est " + nombre4 + "." );