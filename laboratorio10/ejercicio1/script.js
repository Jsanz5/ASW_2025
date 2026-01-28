const boton = document.getElementById("test-click");

const eventos = ["click", "dblclick", "mousedown", "mouseup"];

eventos.forEach((evento) => {
  boton.addEventListener(evento, (e) => {
    console.log(e.type);
  });
});
