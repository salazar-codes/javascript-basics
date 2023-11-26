
// Imprimiendo en consola
console.log("Hola mundo");

// Definiendo variables y constantes
// let a = 10;
// var b = 10;
// const c = 10;
// c = 20; // No se puee hacer, devuelve un error

// Definiendo variables en una sola línea
let a = 10, b = 10, c = 10, x = a + b;
console.log(x);
console.log({a});

// Cambiando de color a la impresión en consola
console.log('%c Mis variables', 'color:green; font-weight:bold'); // Cambia las prodpiedades css del mensaje

console.log(x);
console.table({ a, b, c, x });

// Mensaje desde el navegador para interacción con el usuario
alert("Hola mundo");

// prompt('¿Cuál es tu nombre?','Sin nombre');
let nombre = prompt('¿Cuál es tu nombre?','Sin nombre');
console.log(nombre );

// confirm('¿Está seguro de borrar esto?');
const seleccion = confirm('¿Está seguro de borrar esto?');
console.log(seleccion);

// console.log(window); // Variable global en Chrome
// console.log(global); // Variable global en nodeJS