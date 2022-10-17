let nombre = parseInt(prompt("Indiquer un nombre entier :"));

for (nombre; nombre > -1; nombre--) {
     let nombre2 = document.createElement('p');
     nombre2.textContent = nombre;
     document.body.appendChild (nombre2);
}