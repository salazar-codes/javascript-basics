import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
//2. se agrega async a esta funcion para poder usar el await
export const asyncAwaitComponent = async ( element ) => {    
    
    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    try {
        //1. await debe estar sólo dentro de funciones asíncronas
        // con await, hero1 pasa de Promesa a objeto
        // Cuando las promesas dependen en cascada
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }

}

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if(!hero) throw `Hero with id ${id} not found`;

    return hero;
}
