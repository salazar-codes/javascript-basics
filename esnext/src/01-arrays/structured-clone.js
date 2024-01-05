
const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

// Por qué lo copia?
// Porque cuando tengo un array con objetos dentro, los objetos siguen pasándose por referencia.
// Si es un array [String, obj, obj] (contiene un primitivo), ya no se pasa por referencia
// El spread es para primitivos
const heroesCopy = [...heroes];

// Antes se hacía así
const heroesCopyAntes = JSON.parse(JSON.stringify(heroes));

const heroesCopyClone = structuredClone(heroes);

heroesCopy[0].name = 'Green Lantern';

console.table(heroes);
console.table(heroesCopy);
console.table(heroesCopyClone);