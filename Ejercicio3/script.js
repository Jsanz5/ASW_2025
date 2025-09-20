// 1. Pedir al usuario su edad.

let edad = prompt("¿Cuántos años tienes?");


// 2. Mostrar si es mayor o menor de edad

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Aún eres menor de edad.");
}

// 3. Mostrar los números del 1 al 10 con un for.

for (i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Reto extra: pedir contraseña hasta que sea "1234".

let contraseña = ""; // Declaro una variable de inicio vacia.

while (contraseña != "1234") {

    if (contraseña != "") {
        alert("Contraseña incorrecta. Intenta nuevamente.");
    }
    contraseña = prompt("Ingresa la contraseña:");
}
console.log("¡Contraseña correcta!");