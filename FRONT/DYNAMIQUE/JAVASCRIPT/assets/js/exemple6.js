let nombresentier1 = parseInt(prompt("Indiquez un nombre entier:"));
let nombresentier2 = parseInt(prompt("Encore un autre:"));
let operateur = prompt("Maintenant, indiquez un opérateur:");
let resultat=0;

while (operateur!= "+" && operateur!= "*" && operateur!= "/" && operateur!= "-")
{
 let operateur = prompt("Saisie erronée, indiquez un opérateur:");
}

if (operateur = "+")
{
resultat=nombresentier1+nombresentier2;
}

else if (operateur = "-")
{
resultat=nombresentier1-nombresentier2;
}

else if (operateur = "*")

{
resultat=nombresentier1*nombresentier2;
}

else if (operateur = "/")

{
resultat=nombresentier1/nombresentier2;
}

alert ("Le résultat de votre calcul est: " + resultat );