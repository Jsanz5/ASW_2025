document.querySelector("form").addEventListener("submit", function (event) {
  /*esto recibe el evento submit*/ event.preventDefault(); /* esto evita que el formulario se envíe y recargue la página */

  /* Obtener los valores de los campos del formulario */
  const nombre = document.getElementById("nombre").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const pais = document.getElementById("pais").value;

  /* Crear un div para mostrar los resultados */
  const resultDiv = document.getElementById("resultado");

  // Esto hace que tome el valor del país seleccionado
  const namePais = document.querySelector(
    `#pais option[value="${pais}"]`
  ).textContent;

  /* Esto es para mostrar los resultados en la página */
  resultDiv.innerHTML = `<p>Nombre: ${nombre}</p>
                        <p>Fecha de Nacimiento: ${fechaNacimiento}</p>
                        <p>País: ${namePais}</p>`;
});
