// consts para el contador de caracteres
const textarea = document.getElementById("comentarios");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
  const actual = textarea.value.length;
  const max = textarea.getAttribute("maxlength"); // Devuelve 200

  // para mostrar el contador actual / maximo
  contador.textContent = `${actual} / ${max}`;

  // Si quedan menos de 20 caracteres (es decir, se ha escrito 180 o más), cambia a rojo
  if (max - actual < 20) {
    contador.classList.add("rojo");
  } else {
    contador.classList.remove("rojo");
  }
});

// Validación del formulario de inscripción
const formulario = document.getElementById("FormularioInscripcion");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío por defecto

  const nombre = formulario.nombre.value.trim();
  const email = formulario.email.value.trim();
  const password = formulario.password.value;
  const lenguaje = formulario.lenguaje.value;

  // Valida que el nombre empiece por mayúscula y solo contenga letras y espacios
  // Regex: ^[A-ZÁÉÍÓÚÑ] asegura la mayúscula inicial. [a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*
  const nombreRegex = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*$/;
  if (!nombreRegex.test(nombre)) {
    alert(
      "El nombre debe empezar por mayúscula y contener solo letras y espacios.",
    );
    return;
  }

  // Valida el formato de email con regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, introduce un email válido.");
    return;
  }

  // Valida la fortaleza de la contraseña por pasos
  if (password.length < 8) {
    alert("La contraseña debe tener mínimo 8 caracteres.");
    return;
  } else if (!/[A-Z]/.test(password)) {
    alert("Debe incluir al menos una mayúscula.");
    return;
  } else if (!/[a-z]/.test(password)) {
    alert("Debe incluir al menos una minúscula.");
    return;
  } else if (!/[0-9]/.test(password)) {
    alert("Debe incluir al menos un número.");
    return;
  }

  // Validación de lenguaje favorito
  if (lenguaje === "") {
    alert("Debes seleccionar un stack favorito.");
    return;
  }

  // Si todo pasa las validaciones:
  alert(`¡Bienvenido ${nombre}! Te has registrado exitosamente.`);
  console.log(`Bienvenido ${nombre}, te gusta ${lenguaje}. Email: ${email}`);

  // Limpia el formulario y reiniciar el contador
  formulario.reset();
  contador.textContent = "0 / 200";
  contador.classList.remove("rojo");
});
