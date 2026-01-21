console.log("Ancho de la ventana: " + window.innerWidth);
console.log("Alto de la ventana: " + window.innerHeight);

alert("¡Bienvenido a la página!");

var nombre = prompt("¿Cuál es tu nombre?");
document.write("Hola, " + nombre + "!");

var nuevaVentana;

function abrirVentana() {
  nuevaVentana = window.open(
    "https://www.google.com",
    "_blank",
    "width=600,height=400"
  );

  var cerrar = confirm("¿Deseas cerrar la nueva ventana?");
  if (cerrar && nuevaVentana) {
    nuevaVentana.close();
  }
}
