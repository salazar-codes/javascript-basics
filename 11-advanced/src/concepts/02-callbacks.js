import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {    
    
    const id = '5d86371f233c9f2425f16916';
    findHero(id, (hero) => {
        element.innerHTML = hero.name;
    });

}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object) => void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    callback( hero );
}