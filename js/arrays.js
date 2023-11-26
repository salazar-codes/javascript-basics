

// const array = new Array(10);
const array = [];
console.log(array);

let videojuegos = ['Mario','Spiderman','Kirby'];
console.log({videojuegos});

console.log( videojuegos[0] );

// En un array de JS se puede almacenar diversos tipos de datos
let arreglosDiversos = [
    true,
    123,
    'jimmy',
    1 + 2,
    function(){},
    ()=>{},
    { a:1 },
    ['Gokú','Vegeta','Thrunks']
]
console.log( arreglosDiversos );

console.log( arreglosDiversos[0] );
console.log( arreglosDiversos[2] );
console.log( arreglosDiversos[7][2] );