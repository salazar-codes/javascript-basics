let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },  
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'Infinity war'
}

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('Nro. Trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje["ultima-pelicula"]);

// Más detalles
delete personaje.edad;

personaje.casado = true;

// Muestra los pares - pero no de manera alfabética
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// SI personaje es CONST, sólo evita que se prohiba el asignar
// valor a la variable personaje como tal, más no a los atributos
// para bloquear atributos, usar freeze
Object.freeze( personaje );
personaje.dinero = 1000000;
personaje.casado = false;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores     = Object.values(personaje);
console.log({propiedades,valores});

