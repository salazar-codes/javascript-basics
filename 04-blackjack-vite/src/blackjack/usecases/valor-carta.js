  /**
   * 
   * @param {String} carta Carta extraída del deck. Ejemplo: '9C'
   * @returns {Number} Valor de la carta extraía. Ejemplo: 9
   */
  export const valorCarta = ( carta ) => {
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