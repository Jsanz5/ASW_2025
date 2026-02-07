// Contenedor del tablero
const tablero = document.getElementById("tablero");

// Estado del juego con un array de 9 posiciones (3x3)
let estado = Array(9).fill(null);

// Jugador actual ("X" o "O")
let jugadorActual = "X";

// creo el tablero dinámicamente con 9 celdas y un atributo data para identificar cada celda

for (let i = 0; i < 9; i++) {
  const celda = document.createElement("div");
  celda.classList.add("celda");

  // Atributo data para identificar la celda
  celda.dataset.index = i;

  tablero.appendChild(celda);
}

// este evento se encarga de manejar los clicks en el tablero, actualizando el estado del juego y comprobando si hay un ganador o empate después de cada movimiento

tablero.addEventListener("click", (e) => {
  // Comprobamos que se ha hecho click en una celda
  if (!e.target.classList.contains("celda")) return;

  const index = e.target.dataset.index;

  // Si la celda ya está ocupada, no se puede jugar
  if (estado[index] !== null) return;

  // Guardamos el movimiento en el array
  estado[index] = jugadorActual;

  // Mostramos el símbolo en la interfaz
  e.target.textContent = jugadorActual;
  e.target.classList.add(jugadorActual.toLowerCase());

  // Comprobamos si hay victoria
  if (comprobarVictoria()) {
    setTimeout(() => alert(`¡Ha ganado el jugador ${jugadorActual}!`), 100);
    return;
  }

  // Comprobamos si hay empate
  if (!estado.includes(null)) {
    setTimeout(() => alert("¡Empate!"), 100);
    return;
  }

  // Cambiamos de jugador
  jugadorActual = jugadorActual === "X" ? "O" : "X";
});

// esta función comprueba si el jugador actual ha ganado el juego
function comprobarVictoria() {
  const combinacionesGanadoras = [
    [0, 1, 2], // Filas del tablero
    [6, 7, 8], // Filas del tablero
    [3, 4, 5], // Filas del tablero
    [0, 3, 6], // Columnas del tablero
    [1, 4, 7], // Columnas del tablero
    [2, 5, 8], // Columnas del tablero
    [0, 4, 8], // Diagonales del tablero
    [2, 4, 6], // Diagonales del tablero
  ];

  return combinacionesGanadoras.some((combinacion) =>
    combinacion.every((index) => estado[index] === jugadorActual),
  );
}

// esto es para reiniciar el juego al presionar la tecla "R", reseteando el estado y limpiando el tablero

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    reiniciarJuego();
  }
});

function reiniciarJuego() {
  estado = Array(9).fill(null);
  jugadorActual = "X";

  document.querySelectorAll(".celda").forEach((celda) => {
    celda.textContent = "";
    celda.classList.remove("x", "o");
  });
}

// esto es para cambiar el estilo dinámicamente al redimensionar la ventana
window.addEventListener("resize", () => {
  const anchoVentana = window.innerWidth;

  if (anchoVentana < 600) {
    document.body.style.backgroundColor = "#ffe082";
  } else if (anchoVentana < 900) {
    document.body.style.backgroundColor = "#a5d6a7";
  } else {
    document.body.style.backgroundColor = "#ce93d8";
  }
});
