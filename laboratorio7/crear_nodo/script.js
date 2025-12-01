document.addEventListener("DOMContentLoaded", function () {
  // estoy creando un nuevo nodo de tipo elemento 'li'
  const nuevoNodoLista = document.createElement("li");

  // estoy asignando un texto al nodo creado como nuevo mensaje
  nuevoNodoLista.textContent = "Nuevo Mensaje";

  // estoy seleccionando el paráfo con id 'mensaje'
  const mensajeParrafo = document.getElementById("mensaje");

  // estoy agregando el nuevo nodo <li> al párrafo seleccionado
  mensajeParrafo.appendChild(nuevoNodoLista);
});
