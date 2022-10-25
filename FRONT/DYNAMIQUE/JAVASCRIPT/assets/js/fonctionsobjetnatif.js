// Attention rafraichir entre deux utilisations du programme

let tab1 = new Array();
let valtab;
let i=0;
let j=0;
let sum;
let compteur;
let moyenne;


    valtab = parseInt(window.prompt("Veuillez saisir plusieurs valeurs numériques:"));
    tab1[i]=valtab;
    while (tab1[i]!=0) {
        valtab = parseInt(window.prompt("Encore une valeur numérique:"));
        i++;
        compteur++;
        tab1[i]=valtab;
    }

    console.table(tab1);
    const add = tab1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
 

    moyenne = add / i;


    tab1.length = tab1.length-1;
    

    alert("Le nombre de valeurs saisies est de " + tab1.length +", sa somme de " +add +" et sa moyenne de " + moyenne)


