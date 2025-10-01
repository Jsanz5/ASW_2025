// 1. Pida el nombre y la edad al usuario.

let nombre = prompt("Ingresa tu Nombre");
let edad = prompt("Ingresa tu Edad");


// 2. Muestre un saludo personalizado: "Hola Ana, tienes 20 años".

alert("Hola " + nombre + "," + " tienes " + edad + " años.");


/* 3. Si la edad es mayor de 18, mostrar "Puedes entrar", si no "Acceso
denegado".*/

if (edad > 18) {
    alert("Puedes Entrar.")
} else {
    alert("Acceso denegado.")
}