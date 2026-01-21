// --- Tarea 2.2: Captura de información básica ---
const body = document.getElementById("main-body");

body.addEventListener("keydown", (e) => {
  // tipo de evento y la tecla pulsada
  console.log(`Evento: ${e.type} | Tecla: ${e.key}`);
});

// --- Tarea 2.3: Restricción de caracteres con preventDefault() ---
const campoTexto = document.getElementById("campo-texto");

campoTexto.addEventListener("keydown", (e) => {
  // para detectar números (0-9)
  const esNumero = /^[0-9]$/.test(e.key);

  if (esNumero) {
    // Evita que el carácter se escriba en el textarea
    e.preventDefault();

    // mensaje para el usuario
    alert("Error: No se permite la entrada de números en este campo.");
    console.warn(`Intento de escritura bloqueado: ${e.key}`);
  }
});
