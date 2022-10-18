let valtab= parseInt(prompt("Entrez les valeurs du tableau:"));
let tab1 = Array(valtab); // entre parenthèses, le tableau comprendra n valeurs saisis définies par "valtab"
for (i=0;i<valtab;i++) {
    tab1[i] = parseInt(prompt("Entrez les valeurs du tableau:"));
    console.log(tab1[i]);
}
