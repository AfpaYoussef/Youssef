let valtab= parseInt(prompt("Entrez le nombre de valeurs du tableau:"));
let tab1 = Array(valtab); // entre parenthèses, le tableau comprendra n valeurs saisies et définies dans "valtab"

for (i=0;i<valtab;i++) {
    tab1[i] = parseInt(prompt("Entrez les valeurs du tableau:"));
    console.log(tab1[i]);
}
