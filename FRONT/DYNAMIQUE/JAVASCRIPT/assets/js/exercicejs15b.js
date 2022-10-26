var alea=Math.round(Math.random()*99)+1;
var coup=0;
var bouton = document.getElementById("cliquons");
var resultat = document.getElementById("resultat");
var valeur = document.getElementById ("valeur1") ;
function verif(valeur)
{
coup=coup+1;
if (coup > 6)
    {
    partie=confirm("Oh! la honte. T'as perdu !\nIl fallait trouver : " + alea + "\nNouvelle partie ?");
    if (partie)
        {
        document.label1.commentaire.value="Nouvelle partie...";
        coup=0;
        alea=Math.round(Math.random()*99)+1;
        document.label1.coup.value=0;
        valeur.value="";
        }
        else
        {
        window.close();
        }
    }
    else
    {
    if (valeur.value < alea)
        resultat.value="Trop petit";
    if (valeur.value > alea)
        resultat.value="Trop grand !" ;
    if (valeur.value == alea)
        resultat.value="Gagné !!!";
    document.label1.coup.value=coup;
    }
}

bouton.addEventListener("click",function(){
    verif(valeur);
});