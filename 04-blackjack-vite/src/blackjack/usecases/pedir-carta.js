/**
 * 
 * @param {Array<String>} deck Deck de cartas. Ejemplo: ['C','D','H','S']
 * @returns {String} Retorna una carta extraída del deck. Ejemplo: '9C'
 */
export const pedirCarta = (deck) => {
    if( deck.length === 0 ) throw 'No hay cartas en la baraja';
    return deck.pop();
}