let anneedenaissance = parseInt(prompt("Indiquez votre année de naissance:"));
let date = Date.getDate();
let age = date - anneedenaissance;
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

alert ("Vous avez" + age +" ans et donc vous êtes " + resultat + ".");