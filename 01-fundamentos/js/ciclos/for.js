
const carros = ['Toyota','Hyundai','Volvo','Kia'];

// Estructura tradicional
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

console.warn('For in');
for (let i in carros) {
    console.log(i);
    console.log(carros[i]);
}

console.warn('For of');
for (let heroe of carros) {
    console.log(heroe);
}