
class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Mensaje custom de la clase');
    }

    nombre = '';
    codigo = '';
    frase = 'ssss';
    comida = '';
    // No es necesario escribir las variables aquí ya que el constructor las crea

    constructor(nombre = 'Sin nombre', codigo= 'Sin codigo', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
    }

    // El set debería recibir sólo un argumento
    // no pueden tener el mismo nombre del atributo
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita es ${ this.comida }`;
    }

    quienSoy(){
        console.log(`Soy ${ this.codigo } y mi identidad es ${ this.nombre }`);
    }

    otroMetodo(){
        this.quienSoy();
    }
}

const spiderman = new Persona("peter parket","spiderman","Hey tú!");
const spiderman2 = new Persona("peter parket","spiderman","Hey tú!");
console.log(spiderman);

spiderman.quienSoy();

// No es una función, si no que se trata como una propiedad
spiderman.setComidaFavorita = 'Arroz con pollo';
console.log(spiderman.getComidaFavorita);

console.log('Conteo estático: ' + Persona.conteo);

Persona.mensaje();

// En JS se pueden definir propiedades externas a la clase
Persona.nuevapropiedad = 'prop externa';
console.log(Persona.nuevapropiedad);