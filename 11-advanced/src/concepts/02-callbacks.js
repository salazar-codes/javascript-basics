import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {    
    
    const id = '5d86371f97c29d020f1e1f6d';

    findHero(id, (error, hero) => {
        if( error ) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero?.name || 'No hay heroe';
    });
}

/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object) => void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero ) {
        callback(`Hero with id ${id} not found.`);
        return;
    }
    callback( null, hero );
}