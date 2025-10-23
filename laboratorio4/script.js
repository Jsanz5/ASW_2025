/*
Parte 1: Conceptos Fundamentales de Arrays
1. Definición y Acceso: Cread un array en JavaScript llamado datosUsuario que contenga datos de diferentes tipos (p. ej., un nombre de tipo String(), una edad de tipo Number(), y un valor booleano).
2. Índices y Posición: Mostrad por consola el segundo elemento del array, recordando que los elementos están ordenados y se accede a ellos mediante la posición (índice).
3. Propiedad length: Utilizad la propiedad length para devolver el número de elementos que contiene el array.
*/

console.log("--- Inicio Parte 1 ---");
console.log("P1.1: Creando array 'datosUsuario' con ['Jowell', 34, true]");
let datosUsuario = ["Jowell", 34, true];
console.log("Array 'datosUsuario' creado:", datosUsuario);

console.log("\nP1.2: Accediendo al segundo elemento (índice 1).");
console.log(datosUsuario[1]);

console.log("\nP1.3: Mostrando la longitud del array con .length.");
console.log(datosUsuario.length);
console.log("--- Fin Parte 1 ---");

/*
Parte 2: Modificación de Arrays: Añadir y Eliminar Elementos 
1. Añadir al final: Utilizad el método push() para añadir dos nuevos elementos al final del array datosUsuario. Mostrad la nueva longitud devuelta por el método.
2. Eliminad del Final: Utilizad el método pop() para obtener el último elemento añadido y eliminarlo del array. Mostrad qué elemento fue devuelto.
3. Añadid al Principio: Utilizad unshift() para añadir un nuevo elemento al principio del array. Verificad cómo este método desplaza todos los demás elementos y devuelve la nueva longitud.
4. Eliminar del Principio: Utilizad shift() para obtener y eliminar el primer elemento del array. Verifique que los demás elementos se han desplazado.
Imprimid por consola todos los resultados de vuestra manipulación del array de forma que se entienda los pasos que habéis seguido.
*/

console.log("\n--- Inicio Parte 2 ---");
console.log("Estado actual de 'datosUsuario':", datosUsuario);

console.log("\nP2.1: Añadiendo 'Géminis' y 'Barcelona' al final con push().");
let nuevaLongitudPush = datosUsuario.push("Géminis", "Barcelona");
console.log("El método push() devuelve la nueva longitud:", nuevaLongitudPush);
console.log("Array 'datosUsuario' actualizado:", datosUsuario);

console.log("\nP2.2: Eliminando el último elemento ('Barcelona') con pop().");
let eleminadoPop = datosUsuario.pop();
console.log("El método pop() devuelve el elemento eliminado:", eleminadoPop);
console.log("Array 'datosUsuario' actualizado:", datosUsuario);

console.log("\nP2.3: Añadiendo 'Estudiante' al principio con unshift().");
let nuevaLongitudUnshift = datosUsuario.unshift("Estudiante");
console.log(
  "El método unshift() devuelve la nueva longitud:",
  nuevaLongitudUnshift
);
console.log("Array 'datosUsuario' actualizado:", datosUsuario);

console.log(
  "\nP2.4: Eliminando el primer elemento ('Estudiante') con shift()."
);
let eliminadoShift = datosUsuario.shift();
console.log(
  "El método shift() devuelve el elemento eliminado:",
  eliminadoShift
);
console.log("Array 'datosUsuario' actualizado:", datosUsuario);
console.log("--- Fin Parte 2 ---");

/*
Parte 3: Métodos Avanzados de Arrays
1. Concatenación: Cread un segundo array llamado arrayExtra con tres elementos. Utilizad concat() para unir datosUsuario y arrayExtra en un nuevo array llamado arrayTotal. Imprimador el resultado por consola explicando lo que habéis hecho.
2. Ordenación Simple: Cread un array de números que utilice el método sort() para ordenarlos. Observad el comportamiento por defecto en JavaScript. ¿Cómo ordena este algoritmo vuestra array? Explicadlo imprimiendo por consola. 
3. Ordenación Personalizada: Modificad el ejercicio anterior, incluyendo una función (unaFuncion) dentro de sort() para establecer cómo se va a realizar la ordenación. Esto os resultará útil para ordenar números en vez de strings. ¿Cómo se define una ordenación ascendente? ¿Y una descendente?
4. Modificación de Contenido: Utilizad el método splice() para modificar el contenido de varios elementos de arrayTotal, eliminando algunos y añadiendo otros en una posición específica.
*/

console.log("\n--- Inicio Parte 3 ---");

console.log("\nP3.1: Concatenación de arrays.");
console.log("Creando 'arrayExtra' con ['Técnico', 2026, false]");
let arrayExtra = ["Técnico", 2026, false];
console.log(
  "Usando concat() para unir 'datosUsuario' y 'arrayExtra' en 'arrayTotal'."
);
let arrayTotal = datosUsuario.concat(arrayExtra);
console.log("Se hizo la unión de: ", arrayTotal);
console.log(
  "Nota: El array 'datosUsuario' original no se modifica:",
  datosUsuario
);

console.log("\nP3.2: Ordenación simple (por defecto).");
let numeros = [1, 4, 2, 3, 5];
console.log("Números en desorden:", numeros);
console.log("Aplicando sort() por defecto...");
numeros.sort();
console.log("Ahora los números estan ordenados:", numeros);

console.log("\nP3.3: Ordenación personalizada.");
console.log("Definiendo 'unaFuncion' para orden ascendente (a - b).");
function unaFuncion(a, b) {
  return a - b;
}
console.log("Ordenando 'numeros' [1, 2, 3, 4, 5] de forma ascendente...");
numeros.sort(unaFuncion);
console.log("Números ordenados de forma ascendente:", numeros);

console.log("Definiendo 'otraFuncion' para orden descendente (b - a).");
function otraFuncion(a, b) {
  return b - a;
}
console.log("Ordenando 'numeros' [1, 2, 3, 4, 5] de forma descendente...");
numeros.sort(otraFuncion);
console.log("Números ordenados de forma descendente:", numeros);

/*
4. Modificación de Contenido: Utilizad el método splice() para modificar el contenido de varios elementos de arrayTotal, eliminando algunos y añadiendo otros en una posición específica.
Parte 4: Funciones Predefinidas de validación y conversión
Cread una variable que almacene una cadena.
    ◦ Aplicad isNaN() para verificar si la cadena no es un número.
    ◦ Aplicad parseInt() y luego parseFloat() a una cadena que represente un número decimal para observar cómo convierten el objeto a valor entero y decimal, respectivamente.
    ◦ Usad String() para convertir un número a cadena de caracteres, y Number() para convertir una cadena numérica a número.
*/

console.log("\nP3.4: Modificación de contenido con splice().");
console.log("'arrayTotal' ANTES de splice:", arrayTotal);
console.log("Aplicando splice(2, 2, 'NuevoElemento1', 'NuevoElemento2')");
console.log(
  "(A partir del índice 2, elimina 2 elementos e inserta los nuevos)"
);
arrayTotal.splice(2, 2, "NuevoElemento1", "NuevoElemento2");
console.log("Array total modificado con splice:", arrayTotal);
console.log("--- Fin Parte 3 ---");

console.log("\n--- Inicio Parte 4 ---");

console.log("Creando variable 'cadena' con '123.45abc'");
let cadena = "123.45abc";

console.log("\nP4.1: Verificando con isNaN() (Is Not a Number).");
console.log("¿La cadena '" + cadena + "' NO es un número? (isNaN)");
console.log(isNaN(cadena)); // True, porque "123.45abc" no se puede convertir a un número válido.
console.log("Comprobación con '123':", isNaN("123")); // False, SÍ es un número.
console.log("Comprobación con 'abc':", isNaN("abc")); // True, NO es un número.

console.log("\nP4.2: Convirtiendo '" + cadena + "' con parseInt().");
let entero = parseInt(cadena);
console.log("Valor convertido a entero:", entero);
console.log(
  "Explicación: parseInt() lee '123' y se detiene en el '.' (carácter no entero)."
);

console.log("\nP4.3: Convirtiendo '" + cadena + "' con parseFloat().");
let decimal = parseFloat(cadena);
console.log("Valor convertido a decimal:", decimal);
console.log(
  "Explicación: parseFloat() lee '123.45' y se detiene en 'a' (carácter no numérico)."
);

console.log("\nP4.4: Convirtiendo número 678 a cadena con String().");
let numero = 678;
console.log("Número original:", numero, "(Tipo:", typeof numero + ")");
let numeroACadena = String(numero);
console.log(
  "Número convertido a cadena:",
  numeroACadena,
  "(Tipo:",
  typeof numeroACadena + ")"
);

console.log("\nP4.5: Convirtiendo cadena '91011' a número con Number().");
let cadenaNumerica = "91011";
console.log(
  "Cadena original:",
  cadenaNumerica,
  "(Tipo:",
  typeof cadenaNumerica + ")"
);
let cadenaANumero = Number(cadenaNumerica);
console.log(
  "Cadena numérica convertida a número:",
  cadenaANumero,
  "(Tipo:",
  typeof cadenaANumero + ")"
);
console.log("--- Fin Parte 4 ---");
