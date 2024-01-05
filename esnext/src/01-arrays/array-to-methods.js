const heroes = ['Batman','Superman','Flash','Aquaman'];
const heroesCopy = heroes;

//heroes.sort();

//const sortedHeroes = heroes.toSorted(); //Hace el sort pero devuelve un nuevo arreglo

// heroes.sort();
// heroes.reverse();

// const reversedHeroes = heroes.toReversed();

//const deletedHero = heroes.splice(0,1,'Volcano');
const deletedHeroes = heroes.toSpliced(0,1,'Volcano'); //ya no devuelve los eliminados, si no un nuevo objeto modificado

console.table(heroes);
console.table({deletedHeroes});
// console.table(reversedHeroes);
//console.table(sortedHeroes);