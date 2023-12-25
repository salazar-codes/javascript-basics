/**
 * Días de semana abrimos a las 11,
 * pero los fds abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy
const dia = 2;
const horaActual = 10;

let horaApertura, mensaje;

horaApertura = ([0,6].includes( dia )) ? 9 : 11;
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, Hoy abrimos a las ${horaApertura}`;

console.log(mensaje);