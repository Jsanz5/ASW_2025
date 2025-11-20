// Apartado 1 - Definición de la clase y propiedades

console.log(
  "Apartado 1 - Definición de la clase y propiedades\n" +
    "Propiedades: " +
    "\n" +
    "\nnombre (string)\n" +
    "poblacion (número)\n" +
    "area (número, en km²)\n" +
    "ciudades (array con al menos tres nombres de ciudades)\n\n" +
    "Crea un constructor que reciba esos valores.\n"
);

class Pais {
  constructor(nombre, poblacion, area, ciudades) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.area = area;
    this.ciudades = ciudades;

    console.log(
      "País: " +
        nombre +
        "\nPoblación: " +
        poblacion +
        "\nÁrea: " +
        area +
        "\nCiudades: " +
        ciudades +
        "\n"
    );
  }

  // Apartado 2 – Métodos con operadores básicos y acumulativos
  incrementarPoblacion(cantidad) {
    this.poblacion += cantidad;
  }

  densidad() {
    let resultado = this.poblacion;
    resultado /= this.area;
    return resultado;
  }

  // Apartado 3 – Operadores comparativos y ternario
  compararArea(otroPais) {
    return this.area > otroPais.area
      ? this.nombre + " es más grande que " + otroPais.nombre
      : otroPais.nombre + " es más grande que " + this.nombre;
  }

  // Apartado 4 – Trabajo con listas y bucles anidados
  mostrarCiudades() {
    for (let ciudad of this.ciudades) {
      console.log(ciudad);
    }
  }

  mostrarCiudadesPorLetra() {
    for (let ciudad of this.ciudades) {
      for (let i = 0; i < ciudad.length; i++) {
        console.log(ciudad[i]);
      }
      console.log("*****");
    }
  }
}

// Apartado 5 – Prueba del código
let pais1 = new Pais("Perú", 470000000, 505000, ["Lima", "Callao", "Chiclayo"]);
let pais2 = new Pais("España", 470000000, 505000, [
  "Barcelona",
  "Madrid",
  "Sevilla",
]);

console.log(
  "Apartado 2 - Métodos con operadores básicos y acumulativos\n" +
    "Implementa un método incrementarPoblacion(cantidad) que sume la cantidad recibida a la propiedad poblacion usando un operador acumulativo (+=).\n"
);

pais1.incrementarPoblacion(1000000);
pais2.incrementarPoblacion(2000000);

console.log("Nueva población de Perú:", pais1.poblacion);
console.log("Nueva población de España:", pais2.poblacion);

console.log(
  "\nImplementa otro método densidad() que calcule la densidad del país (población / área). Utiliza solo operadores de asignación.\n"
);

console.log("Densidad de Perú:", pais1.densidad());
console.log("Densidad de España:", pais2.densidad());

console.log(
  "\nApartado 3 - Operadores comparativos y ternario\n" +
    "Crea un método compararArea(otroPais) que compare el área del país actual con otro país y devuelva un mensaje usando un operador ternario:\n\n" +
    'Si el país actual es más grande: "X es más grande que Y".\n' +
    'Si no: "Y es más grande que X".\n'
);

console.log(pais1.compararArea(pais2));
console.log(pais2.compararArea(pais1));

console.log(
  "\nApartado 4 - Trabajo con listas y bucles anidados\n" +
    "Crea un método mostrarCiudades() que recorra el array ciudades y muestre cada una en consola.\n"
);

console.log("Ciudades de Perú:");
pais1.mostrarCiudades();

console.log("\n");

console.log("Ciudades de España:");
pais2.mostrarCiudades();

console.log(
  "\nCrea un método mostrarCiudadesPorLetra() que use un bucle anidado:\n\n" +
    "Recorre cada ciudad.\n\n" +
    "Dentro, recorre las letras de cada ciudad y las muestre una a una.\n"
);

console.log("Ciudades de Perú por letra:\n");
pais1.mostrarCiudadesPorLetra();

console.log("Ciudades de España por letra:\n");
pais2.mostrarCiudadesPorLetra();
