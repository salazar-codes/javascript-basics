// import { shuffle } from 'underscore';
import _ from 'underscore';
import './style.css'

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

  // const divCartasJugador = document.querySelector("#jugador-cartas");
  // const divCartasComputadora = document.querySelector("#computadora-cartas");
  const divCartasJugadores = document.querySelectorAll(".divCartas");
  const puntosHTML = document.querySelectorAll('small');

  // let puntosJugador = 0;
  // let puntosComputadora = 0;
  let puntosJugadores = [0,0];

  /** Esta funcion crea una nueva bajara */
  const crearDeck = () => {
      deck = [];
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
      return _.shuffle( deck );
  }
  //crearDeck();

  const inicializarJuego = (numeroJugadores = 2) => {
      puntosJugadores = [];
      deck = crearDeck();
      for (let i = 0; i < numeroJugadores; i++) {
          puntosJugadores.push(0);
      }
  }

  /** Esta funcion permite tomar una carta */
  const pedirCarta = () => {
      if( deck.length === 0 ) throw 'No hay cartas en la baraja';
      return deck.pop();
  }
  //pedirCarta();
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
  //valorCarta('2D');

  // Eventos de botones - 2 arg => evento y callback (funcion especial)
  // Callback -> funcion que se llama como argumento
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta();
      const puntosJugador = acumularPuntos(carta, 0);

      // puntosJugador += valorCarta(carta);
      // puntosHTML[0].innerText = puntosJugador;
      crearCarta(carta, 0);

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
          const carta = pedirCarta();
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
          crearCarta(carta, puntosJugadores.length - 1);
          if( puntosMinimos > 21 ) break;
      } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
      determinarGanador();
  }

  const crearCarta = ( carta, turno ) => {
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`;
      imgCarta.classList.add('carta');
      divCartasJugadores[turno].append(imgCarta);
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