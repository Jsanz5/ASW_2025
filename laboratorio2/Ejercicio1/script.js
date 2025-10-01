// 1. Declara variables con var, let y const dentro de una función y dentro de un bloque if.

function Ejercicio1() {
  if (true) {
    var saludo = "Hola";
    let nombre = "Alberto";
    const Edad = 55;

    console.log("saludo:", saludo);
    console.log("nombre:", nombre);
    console.log("edad:", Edad);
  }
}
Ejercicio1();

// 2. Comprueba qué variables se pueden acceder dentro y fuera de cada bloque y función.

/* var saludo: Tiene alcance dentro de la función, así que aunque lo declaré en el if, está en la función Ejercicio1().
 let nombre y const Edad: solo etan en el bloque, por lo tanto solo existen dentro del if y no son acceibles llamarlos por fuera*/

function Ejercicio2() {
  console.log(saludo);
  console.log(nombre);
  console.log(Edad);
}
Ejercicio2();

// 4. Escribe un pequeño informe en comentarios que explique:

// ¿Qué es hoisting y cómo afecta a var?

/* El hoisting puede mover las declaraciones de variables al inicio del código.
  Con var, la variable se crea al inicio y su valor es no está definido hasta que sea asignado.*/

// ¿Qué diferencias de alcance existen entre var, let y const?

/* var tiene alcance de función y puede usarse fuera de bloques como if o for.
 let y const tienen alcance de bloque, solo existen dentro del bloque donde se declaran.
 La diferencia entre ellos es que let permite reasignación y const no.*/
