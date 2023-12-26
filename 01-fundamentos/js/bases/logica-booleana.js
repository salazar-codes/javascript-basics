
console.warn('Not o la negacion');
//console.log(true);
//console.log(!true);

// Todos los valores de la tabla de valor  &&, ||, !  
// combinado con funciones que retornan booleanos

const regresaFalse = () => {
    console.log('false');
    return false
}
const regresaTrue = () => {
    console.log('true');
    return true
}

console.warn('&&');
console.log( regresaFalse() && regresaTrue() ); // false --> sólo se ejecuta la 1era funcion
// al detectar que el primer valor es falso y al ser un operador &&, sólo ya no tiene necesidad de ejecutar la segunda.
// Ejemplo: -> Se usa con la forma: Se ejecuta esto siempre y cuando la primera se cumpla. Uso bastante común
console.log('===== & =====');
regresaFalse() && regresaTrue()
console.log('===== & =====');
regresaTrue() && regresaFalse()

console.warn('||');
// En este caso es al revés, basta que una sea true y las demás no importan (no se ejecutan)
regresaTrue() || regresaFalse()


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;


// asigna 150
const a1 = true && 'Hola mundo' && 150;
// asigna false
//const a1 = false && 'Hola mundo' && 150;

// asigna false
const a2 = true && 'Hola mundo' && soyFalse && 150; 

// Uso comun de asignación de variables
// Toma ya no soy falso
const a3 = soyFalse || 'Ya no soy falso';
// Toma ya no soy falso de nuevo
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
// Toma ya no soy falso de nuevo, no llega al true
const a5 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4,a5});