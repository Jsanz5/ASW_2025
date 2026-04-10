// Obtener el formulario
const formulario = document.getElementById("FormularioInscripcion");

// Escuchar el evento submit
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío por defecto de formulario

  const nombre = formulario.nombre.value.trim(); // El trim es útil para eliminar espacios al inicio y al final, lo que puede ayudar a evitar errores de validación.
  const email = formulario.email.value.trim(); // El trim es útil para eliminar espacios al inicio y al final, lo que puede ayudar a evitar errores de validación.
  const password = formulario.password.value; // No es necesario hacer trim aquí porque las contraseñas pueden contener espacios, pero se puede validar que no esté vacía.
  const lenguaje = formulario.lenguaje.value; // No es necesario hacer trim aquí porque es un select, pero se puede validar que no esté vacío.
  const comentarios = formulario.comentarios.value.trim(); // Aunque los comentarios no son obligatorios, se pueden validar si se desea que no excedan cierta longitud, por ejemplo.

  // Validación de nombre (que no esté vacío) y que no contenga solo espacios
  if (nombre === "") {
    alert("El nombre es obligatorio.");
    return;
  }

  // Validación de email que no esté vacío y tenga un formato válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, introduce un email válido.");
    return;
  }

  // Validación de contraseña que no esté vacía y tenga al menos 8 caracteres
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  // Validación de lenguaje que no esté vacío
  if (lenguaje === "") {
    alert("Debes seleccionar un stack favorito.");
    return;
  }

  // Si todo está correcto, mostrar mensaje de bienvenida
  alert(`¡Bienvenido ${nombre}! Te has registrado exitosamente.`);
  console.log(`Bienvenido ${nombre}, te gusta ${lenguaje}. Email: ${email}`);

  // Limpio el formulario para poder rellenarlo de nuevo
  formulario.reset();
});
