function enviarFormulario() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    var promedio = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    console.log("Promedio: " + promedio.toFixed(2));

if (comprobarNota()) {
    var nombre = document.getElementById("nombre").value;
    div.innerHTML = "<h1>Notable</h1>"; //en vez de escribir en el html document, lo escribimos en el div desde la apertura al cierre
    div.style.backgroundColor = "green";
    }
    else{
        div.innerHTML = "<h1>No notable</h1>";
        div.style.backgroundColor = "red";
    }
}

function cambiaColor(color) {
    var div = document.getElementById("mensajes");
    div.style.backgroundColor = color;
}