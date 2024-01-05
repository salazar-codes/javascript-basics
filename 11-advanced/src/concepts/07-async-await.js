/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async ( element ) => {
    
    console.time('Start');
    
    // No hay necesidad de ejecutarlas una despues de otra
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // se agrega el await para esperar el resultado de las 3 promesas
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])


    element.innerHTML = `
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>
    `
    console.timeEnd('Start');
}

const slowPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});
const mediumPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 1500);
});
const fastPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
});