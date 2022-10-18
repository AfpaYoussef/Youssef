function strtok(str1, str2, n) {
   var text = str1.split(str2);
   document.getElementById("exemple").innerHTML = text[n];
}

strtok("Maison, Amiens, Lapin, hérisson", ",", 2 );