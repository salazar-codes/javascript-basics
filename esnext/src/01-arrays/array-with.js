
const state = [
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

const index = 1;
const newName = 'Green Lantern';

// const newState = state.map((hero, i) => {
//     if(i === index ){
//         hero.name = newName;
//     }
//     return hero;
// });

// Por ahora with regresa un nuevo arreglo pero con la misma referencia en objetos
const newState = state.with(index, {
    ...state.at(index),
    name: newName
})

state[0].name = 'IronMan';

console.table(newState);

console.log(state.at(1)); // Puedo acceder por index



