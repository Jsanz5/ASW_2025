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

// acá estoy creando las cookies
document.cookie = "nombre=Jowell";
document.cookie = "edad=34";
document.cookie = "genero=Masculino";

// creo el allCookies que obtiene todas las cookies
let allCookies = document.cookie;
// esta línea obtiene todas las cookies en una sola cadena
let arrayCookies = allCookies.split("; ");
// aa el getElementById se le pasa el id del elemento donde se quieren mostrar las cookies
let lista = document.getElementById("listaCookies");
console.log(allCookies);

// creo un forEach para recorrer el array de cookies y crear un elemento li por cada cookie
arrayCookies.forEach((cookie) => {
  let li = document.createElement("li");

  // el li.textContent se le asigna el valor de la cookie
  li.textContent = cookie;

  // esto agrega el elemento li a la lista ul
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
