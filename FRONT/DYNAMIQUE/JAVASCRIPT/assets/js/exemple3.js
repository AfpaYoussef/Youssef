let reponse1 = prompt("Saisissez votre nom");
let reponse2 = prompt("Saisissez votre prénom");
let sexe;


if (window.confirm("êtes-vous un homme?") == true)
{ 
    sexe = "Monsieur";
}

else {

    sexe = "Madame";
}
    
alert("Bonjour " + sexe +" " + reponse1 + " " + reponse2 + "\nBienvenue sur notre site!");