/*
Ejercicio 1: Creación de Array a partir de Cookies (2,5 Puntos)
Cread varias cookies en vuestra sesión, por ejemplo:

usuario=ana
idioma=es
tema=oscuro

Imprimid todas las cookies por pantalla.

¿Qué línea de JavaScript permite convertir la cadena completa de 
document.cookie en un array donde cada elemento es una cookie individual? 
*/

document.cookie = "nombre=Jowell";
document.cookie = "edad=34";
document.cookie = "genero=Masculino";

let allCookies = document.cookie;
let arrayCookies = allCookies.split("; ");
let lista = document.getElementById("listaCookies");
console.log(allCookies);

arrayCookies.forEach((cookie) => {
  let li = document.createElement("li");

  li.textContent = cookie;

  lista.appendChild(li);
});

console.log(
  "\n" +
    "¿Qué línea de JavaScript permite convertir la cadena completa de document.cookie en un array donde cada elemento es una cookie individual?" +
    "\n"
);

console.log(
  "La línea es, let arrayCookies = document.cookie.split('; '), ya que utiliza el método split() para dividir la cadena de cookies con un \"; \" como delimitador."
);
