let paises = ['Peru','Francia','Alemania','Brasil'];
console.log('longitud: ' + paises.length);

let primero = paises[0];
let ultimo = paises[paises.length - 1];

console.log({primero, ultimo});

paises.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = paises.push('Marruecos'); // Agrega al final del array
console.log({nuevaLongitud, paises});

nuevaLongitud = paises.unshift('Polonia'); // Agrega al principio
console.log({nuevaLongitud, paises});

paisBorrado = paises.pop(); // Elimina un juego
console.log({paisBorrado, paises});

let pos = 1;
let paisesBorrados = paises.splice(pos, 2);
console.log({paisesBorrados, paises});

//let alemaniaIndex = paises.indexOf('alemania'); // retorna -1: No se encuentra
let alemaniaIndex = paises.indexOf('Alemania');
console.log(alemaniaIndex);
