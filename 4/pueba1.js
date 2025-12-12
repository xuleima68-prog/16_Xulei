//comentario de una sola linea
/*comentario
de varias lineas*/
// alert("Prueba de codigo")

/* var mensaje = "hola mundooooooooooo";
console.log(mensaje);
console.log("Hola mundo");
console.log(document);
console.log(localStorage);

var esViernes = true;  
console.log("Es viernes " + esViernes);
if (esViernes == true) {
    console.log("Por fin es viernes vete a la meir Guillermo");
}

var nombreUser= prompt("Cual es tu nombre?"); //prompt sirve como el input en Py
console.log("Hola " + nombreUser);
document.write("<h1>Hola " + nombreUser + "</h1>");
*/

function comprobarPass() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    return pass1 == pass2;


}

function enviarFormulario() {
    console.log("Enviando formulario...");
    var div = document.getElementById("mensajes");

    //si las pass coinciden
    if (comprobarPass()) {
    var nombre = document.getElementById("nombre").value;
    div.innerHTML = "<h1>Password OK</h1>"; //en vez de escribir en el html document, lo escribimos en el div desde la apertura al cierre
    div.style.backgroundColor = "green";
    //document.writeln("<h1>Hola " + nombre + "</h1>");
    //document.writeln("<h1>Password OK</h1>");
    }
    else{
        //document.writeln("<h1>Las contraseñas no coinciden</h1>");
        div.innerHTML = "<h1>Password KO</h1>";
        div.style.backgroundColor = "red";
    }
}

function cambiaColor(color) {
    var div = document.getElementById("mensajes");
    div.style.backgroundColor = color;
}
