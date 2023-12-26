// Funciones tradicionales
function saludar(nombre){
    console.log(arguments); // LAS FUNCIONES DE FLECHA YA NO SOPORTAN ARGUMENTS
    console.log('Hola ' + nombre);
    return 10;
}

// Función anónima
const saludar2 = function (nombre){
    console.log('Hola '+nombre);
}

// Lambda Function - Funciones de Flecha
const saludarFlecha = (nombre) => {
    console.log('Hola '+nombre);
}

const retornoDeSaludar = saludar('Codebreaker', 40, 'Perú', false);
saludar2('Codebreaker2');
saludarFlecha('Codebreaker2 Flecha');

console.log({retornoDeSaludar});

// Función de flecha
const sumar = (a,b) => {
    return a + b;
}
// Función de flecha simplificada - 1 sola línea
const sumar2 = (a,b) => a+b;
console.log(sumar2(5,9));

const getAleatorio = () => Math.random();
console.log(getAleatorio());