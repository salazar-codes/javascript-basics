import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {    
    
    const id1 = "5d86371fd55e2e2a30fe1cc4";
    console.log('Inicio del componente');

    // Función asíncrona - se ejecuta a destiempo
    findHero(id1)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )

    console.log('Fin del componente');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 * EL async cambia el return a una Promesa
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if(!hero) throw `Hero with id ${id} not found`; //reject

    return hero?.name; // resolve-> Valor de éxito en una func asincrona
}
