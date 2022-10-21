//variables
let valtab;
let nomposte;
let tab1 = new Array();
let rechval;
let max = tab1[tab1.length - 1];
let min = tab1[0];
let i;
let j;
let sum = 0;
let compteur = 0;
let moyenne = 0;


function Getinteger()
{
    // valtab = prompt(Number(Math.round()));
    while(valtab != parseInt(valtab)){
        alert("Veuillez rentrer un entier");
        valtab = prompt("Entrez le nombre de postes souhaité");
    }
}

function InitTab()
{  
    valtab = Number(prompt("Entrez le nombre de postes souhaité"));
    console.log(valtab);
    Getinteger();
    tab1 = Array(valtab); // entre parenthèses, la longueur du tableau se définira par n valeurs saisies et définies dans "valtab"
    console.table(tab1);
}

function SaisieTab()
{
    InitTab();
    for(i=0;i<valtab; i++) {
        nomposte =  Number(prompt("Entrez le nombre "+(i+1)+" du tableau"));
        tab1[i] = [nomposte];
    }
        AfficheTab();
}

function AfficheTab()
{
    console.table(tab1);
    RechercheTab();
}

function RechercheTab()
{   
    rechval = prompt("saisir le rang recherché du tableau:");
    alert(tab1[rechval]);
    InfoTab ();
}


function Somme()
{
    for (j = 0; j<valtab;j++) {
        sum +=  parseInt(tab1[j]);
        compteur++;
    }
}

function Moyenne()
{
    Somme();
    moyenne = sum / compteur;
}

function InfoTab()

{
    Moyenne();
    Somme();
    alert("le maximum des postes est " + tab1[tab1.length - 1] + " et la moyenne des postes est " + moyenne);
}