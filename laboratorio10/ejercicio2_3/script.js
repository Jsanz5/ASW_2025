// Ejercicio 2

document.getElementById("padre").addEventListener("click", () => {
  console.log("Click en el Padre (section)");
});

document.getElementById("hijo").addEventListener("click", () => {
  console.log("Click en el Hijo (div)");
});

document.getElementById("boton").addEventListener("click", () => {
  console.log("Click en el Botón");
});

// Ejercicio 3

document.getElementById("boton").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en el Botón");
});
