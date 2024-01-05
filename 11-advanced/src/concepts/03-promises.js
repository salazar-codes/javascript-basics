import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {    
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3><br/>
            <h3>${hero2.name}</h3>
        `;
    }
    const renderError = (error) => {
        element.innerHTML = `
            <h3>${ error }</h3>
        `;
    }

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    Promise.all([
        findHero(id1), 
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch( renderError )

    //!Forma 1 - PromiseHell
    // findHero(id1)
    //     // .then( superHero => renderHero(superHero));
    //     .then( renderHero ) //envía la función x referencia al tener los mismos parametros
    //     // .catch( error => renderError(error) );
    //     .catch( renderError );

    //!Forma 2 - Promesas anidadas (Cuando una petición depende de otra)
    // let hero1;
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {
    return new Promise(( resolve, reject )=>{
        const hero = heroes.find((hero) => hero.id === id);
        if( hero ) {
            resolve( hero );
            return;
        }
        reject(`Hero with id ${id} not found.`);
    });
}