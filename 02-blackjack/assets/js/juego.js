/**
 *  2C = Two of Clubs
 *  2D = Two of Diamonds
 *  2H = Two of Hearts
 *  2S = Two of Spades
 */

let deck = [];
const tipos = ['C','D','H','S']; // tipos de cartas
const especiales = ['A','J','Q','K']; // cartas especiales

// Referencias de HTML
const btnPedir = document.getElementById('btnPedir');
const btnNuevo = document.getElementById('btnNuevo');
const btnDetener = document.getElementById('btnDetener');

const divCartasJugador = document.querySelector("#jugador-cartas");
const puntosHTML = document.querySelectorAll('small');

let puntosJugador = 0;
let puntosComputadora = 0;

/** Esta funcion crea una nueva bajara */
const crearDeck = () => {
    for (let i = 2; i < 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle( deck )
    return deck;
}
crearDeck();

/** Esta funcion permite tomar una carta */
const pedirCarta = () => {
    if( deck.length === 0 ) throw 'No hay cartas en la baraja';

    const carta = deck.pop();
    return carta;
}
pedirCarta();

/** Esta funcion permite tomar el valor de la carta */
const valorCarta = ( carta ) => {
    //const valor = carta[0]; // los strings pueden ser tomados como arreglos
    const valor = carta.substring(0, carta.length - 1);

    // let puntos = 0;
    // if( isNaN(valor) ){
    //     puntos = (valor === 'A') ? 11 : 10;
    // }

    return (isNaN(valor)) ? 
             (valor === 'A') ? 11 : 10  // Condicion true, dentro tiene otro ternario
            : valor * 1;
}
valorCarta('2D');


// Eventos de botones - 2 arg => evento y callback (funcion especial)
// Callback -> funcion que se llama como argumento
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if( puntosJugador > 21 ) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ){
        console.warn('21, muy bien!');
    }
});