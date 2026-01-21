class Vehiculo {
  // Propiedades privadas
  #velocidad = 0;
  #estadoMotor = "apagado";

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  encenderMotor() {
    console.log(
      `\n--- Encendiendo el motor del vehículo: ${this.marca} ${this.modelo} ---`
    );
    console.log(`Estado previo: ${this.#estadoMotor}`);
    this.#estadoMotor = "encendido";
    console.log(`Estado actual: ${this.#estadoMotor}`);
  }

  acelerar(incremento) {
    console.log(`\n--- Acelerando ---`);
    console.log(`Velocidad previa: ${this.#velocidad} km/h`);
    this.#velocidad += incremento;
    console.log(`Velocidad actual: ${this.#velocidad} km/h`);
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, numPuertas) {
    super(marca, modelo);
    this.numPuertas = numPuertas;
  }

  // Polimorfismo en acelerar
  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("Mensaje del Coche: El motor responde a la aceleración.");
  }

  mostrarInformacion() {
    console.log(
      `TIPO: Coche | Marca: ${this.marca} | Modelo: ${this.modelo} | Puertas: ${this.numPuertas}`
    );
  }
}

class Bicicleta extends Vehiculo {
  constructor(marca, modelo, tipoBici) {
    super(marca, modelo);
    this.tipoBici = tipoBici;
  }

  // Sobrescribe el método encenderMotor (Ejercicio 2)
  encenderMotor() {
    console.log(
      `Nota: Las bicicletas (${this.marca}) no tienen motor, ¡solo pedales!`
    );
    // Podría llamar al padre si quisiéra forzar el estado, pero respeto la lógica de bici.
  }

  // Polimorfismo en acelerar (Ejercicio 3)
  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("Mensaje de la Bici: Aplicando fuerza en el pedaleo.");
  }

  mostrarInformacion() {
    console.log(
      `TIPO: Bicicleta | Marca: ${this.marca} | Modelo: ${this.modelo} | Tipo: ${this.tipoBici}`
    );
  }
}

function inspeccionarVehiculo(vehiculo) {
  console.log("--- Inspeccionando vehículo en el taller ---");
  // Se llama al método polimórfico
  if (typeof vehiculo.mostrarInformacion === "function") {
    vehiculo.mostrarInformacion();
  } else {
    console.log("El objeto no tiene el método mostrarInformacion.");
  }
}

// --- PRUEBAS ---

const miCoche = new Coche("Toyota", "RAV4", 5);
const miBici = new Bicicleta("Specialized", "Rockhopper", "Montaña");

// Prueba de métodos internos
miCoche.encenderMotor();
miCoche.acelerar(20);

miBici.encenderMotor();
miBici.acelerar(5);

console.log("\n--- RESULTADO ---");
inspeccionarVehiculo(miCoche);
console.log("\n");
inspeccionarVehiculo(miBici);
console.log("\n");

// Opcional: Añado un nuevo tipo de vehículo sin clase
const patinete = {
  marca: "Xiaomi",
  modelo: "Electric Scooter Elite",
  mostrarInformacion() {
    console.log(
      `TIPO: Patinete | Marca: ${this.marca} | Modelo: ${this.modelo}`
    );
  },
};
console.log("\n--- RESULTADO ---");
inspeccionarVehiculo(patinete);
console.log("\n");
