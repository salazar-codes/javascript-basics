

const elMayor = (a,b) => (a > b) ? a : b;
const tieneMembresia = (esMiembro) => (esMiembro) ? '2USD' : '10USD';

console.log(elMayor(5,29));
console.log(tieneMembresia(false));

const amigo = false;

const amigosArr = [
    'Spiderman',
    'Hulk',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(), // Funcion autoinvocada
    elMayor(10,12)
]

console.log(amigosArr);

const nota = 76;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log(grado);