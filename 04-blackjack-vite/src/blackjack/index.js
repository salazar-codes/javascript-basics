// import { shuffle } from 'underscore';
import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
// import crearDeck, {crearNuevoDeck} from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, crearCarta } from './usecases';

const miModulo = (() => {
  'use strict' // Ayuda a evitar errores al programar

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

  const divCartasJugadores = document.querySelectorAll(".divCartas");
  const puntosHTML = document.querySelectorAll('small');
  
  let puntosJugadores = [0,0];
  deck = crearDeck(tipos, especiales);

  const inicializarJuego = (numeroJugadores = 2) => {
      puntosJugadores = [];
      deck = crearDeck(tipos, especiales);
      for (let i = 0; i < numeroJugadores; i++) {
          puntosJugadores.push(0);
      }
  }

  // Eventos de botones - 2 arg => evento y callback (funcion especial)
  // Callback -> funcion que se llama como argumento
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);

      // puntosJugador += valorCarta(carta);
      // puntosHTML[0].innerText = puntosJugador;
      const imgCarta = crearCarta(carta);
      divCartasJugadores[0].append(imgCarta);

      if( puntosJugador > 21 ) {
          console.warn('Lo siento, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador);
      } else if ( puntosJugador === 21 ){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          console.warn('21, muy bien!');
          turnoComputadora(puntosJugador);
      }
  });

  // turno:0 = primer jugador y el último será la computadora
  const acumularPuntos = ( carta, turno ) => {
      puntosJugadores[turno] += valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }

  // turno de la computadora
  const turnoComputadora = ( puntosMinimos ) => {
      let puntosComputadora = 0;
      do {
          const carta = pedirCarta(deck);
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
          const imgCarta = crearCarta(carta);
          divCartasJugadores[puntosJugadores.length - 1].append(imgCarta);

          if( puntosMinimos > 21 ) break;
      } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
      determinarGanador();
  }

  const determinarGanador = () => {
      const [puntosMinimos, puntosComputadora] = puntosJugadores;
      setTimeout(() => {
          if( puntosComputadora === puntosMinimos) { alert("Nadie gana");}
          else if( puntosMinimos > 21) { alert("Computadora gana"); }
          else if( puntosComputadora > 21) { alert("Jugador gana"); }
          else { alert("Jugador gana"); }
      }, 100);
  }

  btnDetener.addEventListener('click', () => {
      turnoComputadora(puntosJugadores[0]);
      btnPedir.disabled = true;
      btnDetener.disabled = true;
  });

  btnNuevo.addEventListener('click',() => {
      inicializarJuego();

      puntosHTML.forEach(elem => elem.innerText = 0)
      divCartasJugadores.forEach(elem => elem.innerHTML = '')
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;
  });

  return {
      nuevoJuego: inicializarJuego
  };

})(); // Funcion anonima autoinvocada