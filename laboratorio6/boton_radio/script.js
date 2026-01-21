// aca estoy creando la variable para el boton de aceptar condiciones
const radio = document.getElementById("acepto_condiciones");

// aca estoy creando el evento para que cuando se cargue la pagina se revise si el boton esta seleccionado o no
document.addEventListener("DOMContentLoaded", function () {
  // esto es para guardar el estado del boton en el localstorage
  const guardado = localStorage.getItem("Aceptado");

  // aca estoy revisando si el boton esta seleccionado o no
  if (guardado === "true") {
    // si el boton esta seleccionado, cambio el color de fondo a verde
    radio.checked = true;
    document.body.style.backgroundColor = "lightgreen";
  } else {
    // si el boton no esta seleccionado, cambio el color de fondo a coral
    radio.checked = false;
    document.body.style.backgroundColor = "lightcoral";
  }

  /*este parte del evento se crea luego de cargar la pagina,
  porque necesitamos validar que todo este cargado antes de crear el evento 
  y la validacion del codigo de arriba este correcta*/

  // aca estoy creando el evento para cuando se cambie el estado del boton
  radio.addEventListener("change", function () {
    // esto es para cambiar el color de fondo dependiendo del estado del boton
    if (radio.checked) {
      document.body.style.backgroundColor = "lightgreen";
      // aca guardo el estado del boton en el localstorage
      localStorage.setItem("Aceptado", radio.checked);
    } else {
      // si el boton no esta seleccionado, cambio el color de fondo a coral
      document.body.style.backgroundColor = "lightcoral";
      // aca guardo el estado del boton en el localstorage
      localStorage.setItem("Aceptado", radio.checked);
    }
  });
});

/* este codigo siempre mantendra el color verde, 
una vez seleccionado el boton y no cambiara a rojo luego ya que la opción de radio button no permite deseleccionarse,
para que el cambio sea posible, se debería usarse un checkbox en lugar de un radio button */
