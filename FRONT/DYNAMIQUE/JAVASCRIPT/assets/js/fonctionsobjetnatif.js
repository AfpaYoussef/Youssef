let tab1 = new Array();
let valtab;
let i=0;



function Saisieval() {
    valtab = parseInt(window.prompt("Veuillez saisir plusieurs valeurs numériques:"));
    tab1[i]=valtab;
    console.log(tab1);
    while (tab1[i]!=0) {
        valtab = parseInt(window.prompt("Encore une valeur numérique:"));
        i++;
        tab1[i]=valtab;
    }
}


 Saisieval ();


