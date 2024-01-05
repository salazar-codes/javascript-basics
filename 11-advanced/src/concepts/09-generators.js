/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {    
    
    const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
}

// También se puede usar con await
//await function* myFirstGeneratorFunction() {
function* myFirstGeneratorFunction() {
    // Se "pausa" la ejecución
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
}
