
const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes ....

// Diferencia entre  '=', '==', '==='

// Estructura IF
// if (condition) {
    
// } else if(null) {
    
// } else {

// }


// Imprimir sin usar If Else, o Switch, unicamente objetos
dia = 3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}
// día de la semana
console.log( diasLetras[dia] || 'Día no definido');

// Ejecutando funciones
const diasLetrasFunc = {
    0: () => 'domingo - 0',
    1: () => 'lunes - 1',
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'viernes - 5',
    6: () => 'sabad - 6o'
}
// día de la semana
console.log( diasLetrasFunc[dia]() || 'Día no definido');

// Con arreglos
const diasLetrasArray = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.log( diasLetrasArray[dia] || 'Día no definido');