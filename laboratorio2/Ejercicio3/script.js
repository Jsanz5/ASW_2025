/* Crea una página que pida al usuario una fecha de nacimiento en formato DD/MM/AAAA.
1. Valida la entrada usando expresiones regulares.
2. Convierte la fecha en un objeto Date.
3. Calcula la edad exacta del usuario (años cumplidos).

Muestra un mensaje del estilo:
Naciste el 15/09/2000, tienes 25 años.
4. Extra: muestra también en qué día de la semana nació (lunes, martes, etc.).*/

function calcular() {
  var texto = document.getElementById("fecha").value;
  var fecha = texto.split("/");

  var dia = Number(fecha[0]);
  var mes = Number(fecha[1]);
  var año = Number(fecha[2]);

  var nacimiento = new Date(año, mes - 1, dia);
  var hoy = new Date();
  var edad = hoy.getFullYear() - nacimiento.getFullYear();

  if (
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() == nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  var diaNumero = nacimiento.getDay();

  var dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  var diaNombre = dias[diaNumero];

  var mensaje =
    "Naciste el " +
    texto +
    ", tienes " +
    edad +
    " años. Naciste un " +
    diaNombre +
    ".";
  document.getElementById("resultado").innerHTML = mensaje;
}
