nombre = 'Jim';
nombre = "Tim";
nombre = `Vim`;

console.log(typeof nombre); // print: string

let esSaturado = false;
console.log(typeof esSaturado); // print: boolean

let sinIniciar = null;
console.log(typeof sinIniciar); // print: object

let soyNull = null;
console.log(typeof soyNull); // print: object

// Los Symbols crea un objeto con identificador único
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1); // print: symbol

console.log(typeof symbol1 === symbol2); // print: false