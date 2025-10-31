/* 
1.1. Creación de una Matriz (1 punto)
    ◦ Definid una matriz llamada inventario que contenga tres arrays internos (filas).
      Cada array interno debe representar un producto con tres datos: [nombre_string, cantidad_number, precio_number].
    ◦ Recordad que un array es una estructura capaz de gestionar datos de diferentes tipos.
*/
console.log(
  "** Ejercicio 1: Matrices **",
  "\n",
  "\n",
  "1.1 Creación de una Matriz"
);

let inventario = [
  ["Laptop", 5, 1200],
  ["Smartphone", 10, 800],
  ["Tablet", 7, 600],
];
console.log("\n", "Inventario inicial:", inventario);

/*
1.2. Acceso y Modificación Matricial (1 punto)
    ◦ Mostrad por consola el nombre del producto ubicado en la segunda fila (índice 1) y su precio (índice 2).
      Los elementos están ordenados y se accede a ellos mediante la posición (índice).
    ◦ Utilizad la propiedad length para devolver el número total de filas en la matriz y el número de elementos en la primera fila.
*/

console.log("\n", "1.2 Acceso y Modificación Matricial", "\n");
console.log(
  "Producto de la segunda fila:",
  inventario[1][0],
  "|",
  "Precio",
  inventario[1][2],
  "€"
);
console.log("Número total de filas:", inventario.length);
console.log("Número de elementos en la primera fila:", inventario[0].length);

/*
1.3. Recorrido Simple (2 puntos)
    ◦ Escribid un bucle que itere sobre la matriz y muestre por consola (1) qué elemento de la lista está accediéndose,
    empezando por el 1, y (2) el nombre de todos los productos (el primer elemento de cada array interno).
*/
console.log("\n", "1.3 Recorrido Simple", "\n");

for (let i = 0; i < inventario.length; i++) {
  console.log("Elemento accedido:", i + 1);
  console.log("Producto:", inventario[i][0]);
}

/*
2.1. Función para Cálculo de Inventario (2 puntos)
    ◦ Definid una función llamada calcularValorTotal que reciba la matriz inventario como argumento.
    ◦ Dentro de la función, iterad sobre las filas de la matriz, calculando (cantidad * precio)
      para cada producto.
    ◦ La función debe devolver la suma total del valor de todo el inventario.
    */

console.log("\n", "*******************************************************");
console.log(
  "\n",
  "** Ejercicio 2: Funciones  **",
  "\n",
  "\n",
  "2.1 Función para Cálculo de Inventario",
  "\n"
);

function calcularValorTotal(inventario) {
  let valorTotal = 0;
  for (let i = 0; i < inventario.length; i++) {
    let nombre = inventario[i][0];
    let cantidad = inventario[i][1];
    let precio = inventario[i][2];
    let valorProducto = cantidad * precio;
    valorTotal += cantidad * precio;

    console.log(
      nombre + ": " + cantidad + " x " + precio + " = " + valorProducto
    );
  }
  return valorTotal;
}

console.log(
  "\n",
  "El valor total del inventario es:",
  calcularValorTotal(inventario),
  "€"
);

/*
2.2. Uso de Funciones Anónimas:
    Recordad que las Funciones anónimas son aquellas que asociamos directamente a una propiedad o variable y no necesitan nombre.
    ◦ Definid una variable llamada ordenarPorPrecio y asignadle una función anónima que sirva como función de comparación para el método sort().
    ◦ Utilizad esta variable ordenarPorPrecio junto con el método sort() para ordenar la matriz inventario por el precio de los productos de forma ascendente.
 */
console.log("\n", "2.2 Uso de Funciones Anónimas", "\n");

let ordenarPorPrecio = function (a, b) {
  return a[2] - b[2];
};
inventario.sort(ordenarPorPrecio);
console.log("Inventario ordenado por precio ascendente:", inventario);

/*3.1. Adición de un Método al Prototype (1 punto)
    ◦ Utilizad la propiedad prototype para añadir un nuevo método llamado obtenerUltimoElemento
     al objeto Array. ¿Cómo lo habéis hecho?
    ◦ Este nuevo método debe devolver el último elemento del array, 
    similar a cómo lo haría pop(), pero sin eliminarlo ni modificar el array original. 
    ¿Qué uso tenéis que hacer del this para que el método funcione?
    Explicadlo imprimiendo por consola.
*/

console.log("\n", "*******************************************************");
console.log(
  "\n",
  "** Ejercicio 3: Prototype **",
  "\n",
  "\n",
  "3.1. Adición de un Método al Prototype",
  "\n"
);

console.log(
  "",
  "He añadido un nuevo método al objeto Array usando la propiedad prototype,",
  "\n",
  "que permite que los arrays puedan acceder a este método sin necesidad de definirlo en cada uno.",
  "\n",
  "El método se llama obtenerUltimoElemento y devuelve el último elemento del array utilizando this[this.length - 1].",
  "\n",
  "Aquí, this se refiere al array que está invocando el método (en este caso, 'inventario'), por lo que siempre accede al array.",
  "\n",
  "Gracias a this, el método puede obtener el último elemento sin modificar el array original, a diferencia de métodos como pop() que sí lo eliminan elementos.",
  "\n"
);

Array.prototype.obtenerUltimoElemento = function () {
  return this[this.length - 1];
};

console.log("El último elemento es:", inventario.obtenerUltimoElemento());
console.log("\n");

/*3.2 Verificación del Nuevo Método (1 punto)
    ◦ Cread un array simple de prueba.
    ◦ Invocad el nuevo método obtenerUltimoElemento() en vuestro array de prueba
     y mostrad el resultado por consola.
    ◦ Verificad que la longitud del array original (usando length) sigue siendo la misma,
     demostrando que el array no ha sido modificado, a diferencia de lo que ocurriría 
     si usáramos pop() o shift().
*/

console.log("3.2 Verificación del Nuevo Método", "\n");
let cars = ["Toyota", "Kia", "Porshe", "Citroen"];

console.log("La logitud inicial es:", cars.length);
console.log("El ultimo elemento es:", cars.obtenerUltimoElemento());
console.log("La logitud final es:", cars.length);

console.log("\n");
