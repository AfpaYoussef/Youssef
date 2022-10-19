//variables
let valtab;
let nomposte;
let tab1 = new Array();

function Getinteger()
{
    // valtab = prompt(Number(Math.round()));
    if(valtab != parseInt(valtab)){
        alert("Veuillez rentrer un entier");
    }
}

function InitTab()
{  
    valtab = Number(prompt("Entrez le nombre de postes souhaité"));
    console.log(valtab);
    //Getinteger();
    tab1 = Array(valtab); // entre parenthèses, le tableau comprendra n valeurs saisies et définies dans "valtab"
    console.table(tab1);
}

function SaisieTab()
{
    InitTab();
    nomposte = prompt("Entrez les noms des postes: ");
    console.log(nomposte);
}

function AfficheTab()
{
    SaisieTab();

}

function RechercheTab()

{
    AfficheTab()
}

function InfoTab ()

{
    RechercheTab()
}