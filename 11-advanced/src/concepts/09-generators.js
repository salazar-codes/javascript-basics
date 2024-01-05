/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {    
    
    // const myGenerator = myFirstGeneratorFunction();

    const genId = idGenerator();

    console.log(genId.next());

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator() {
    let currentId = 0;
    while(true){
        yield ++currentId; //Devuelve el primer id antes de incrementar
    }
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
