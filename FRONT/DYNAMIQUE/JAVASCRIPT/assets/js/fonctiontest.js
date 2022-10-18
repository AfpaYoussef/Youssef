// définition des variables de ma fonction produit
let x = parseInt(prompt("Entrez un nombre:"));
let y = parseInt(prompt ("Entrez un multiplicateur:"));
let resultat;

// définition des variables pour l'affichage de l'image
let img = document.createElement('img');
img.src ="/FRONT/DYNAMIQUE/JAVASCRIPT/assets/img/papillon.jpg";
let div = document.getElementById("imageDiv");
div.appendChild(img);

// fonction produit
function produit(a,b) {
    resultat = a * b;
    document.getElementById("exemple").innerHTML = "Le produit de "+ a + " x " + b + " est égal à " + resultat;
  }

produit (x,y);



