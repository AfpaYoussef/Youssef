var bouton = document.getElementById("targetOption");
var object = document.getElementById ("")
var obj = document.getElementById ("")

function menuToSpan(object) {
    var obj = document.getElementById("targetValue");
    obj.value = object.value;
    obj = document.getElementById("targetOption");
    obj.value = object.text;
    }

    bouton.addEventListener("selected",function(){
        menuToSpan(object);
    });