// El ordenador genera un número aleatorio entre 1 y 100.
let numAleatorio = Math.floor(Math.random() * 100) + 1;

// El usuario tiene hasta 7 intentos para adivinarlo.
let intentos = 0;
let maxIntentos = 7;

while (intentos < maxIntentos) {
  let entrada = prompt("Adivina el número entre 0 - 100: ");
  intentos++;

  // Si acierta, muestra el número de intentos que necesitó.
  if (entrada == numAleatorio) {
    alert("Adivinaste el número en " + intentos + " intentos..!!");
    break;
  }

  /* Después de cada intento, el programa indica si el número es mayor o menor
     que la suposición. */
  if (entrada < numAleatorio) {
    alert("El número es mayor.");
  } else if (entrada > numAleatorio) {
    alert("El número es menor.");
  }
}
// Si no lo consigue en 7 intentos, muestra el mensaje “Has perdido. El número era X”.
if (intentos == maxIntentos) {
  alert("Has perdido, el número era " + numAleatorio);
}
