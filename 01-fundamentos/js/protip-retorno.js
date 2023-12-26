
// Entre parentesis lo que queremos regresar COMO OBJETO
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Jimmy', 'Salazar');
console.log( persona );

function imprimeArgumentos(){
    console.log(arguments); // NO DISPONIBLE PARA FUNCIONES DE FLECHA
}
imprimeArgumentos(1,false,'2',99.0)

// PARA HACERLO DISPONIBLE, REALIZAR LO SIGUIENTE - PARÁMETRO REST
// después del REST no debe venir ningún otro elemento
const imprimeArgumentos2 = ( edad, ...args ) => {
    console.log( {edad, args} );
    return args;
}

const[ edad, vivo, nombre, grati ] = imprimeArgumentos2(1,false,'2',99.0);
console.log({edad, vivo, nombre, grati});

const { apellido: nuevoApellido } = crearPersona('Jimmy', 'Salazar');
console.log(nuevoApellido);

// DESTRUCTURACIÓN DE ARGUMENTOS
let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V','Hulkbuster']
}

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);

