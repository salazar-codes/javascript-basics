
let a = 10;
let b = a;

a = 30;
console.log({a, b}); // en JS los primitivos pasan por valor

// en JS los objetos pasan por referencia
let juan = { nombre: 'Juan'};
//let ana = juan;
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana});

// (...obj) -> agrupa todos los elementos y lo convierte en un array
// const cambiarNombre = ( persona ) => {
const cambiarNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}
let peter = { nombre: 'Peter'};
let tony = cambiarNombre( peter );
console.log({peter, tony});

// el operador spread -> ...obj separa el objeto de la referencia

// Arreglos
const frutas = ['Manzana','Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
