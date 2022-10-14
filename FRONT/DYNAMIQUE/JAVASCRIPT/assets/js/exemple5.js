let anneedenaissance = parseInt(prompt("Indiquez votre année de naissance:"));
let today = new Date();
let cetteannee = today.getFullYear();
let difference = (cetteannee - anneedenaissance);
let age = difference;
let resultat;


if (age < 18)
{
resultat = "mineur";
age = anneedenaissance
}
else
{

resultat = "majeur";
}

alert ("Vous avez " + age +" ans et donc vous êtes " + resultat + ".");