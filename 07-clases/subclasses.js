
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

// Herencia
class Heroe extends Persona {
    clan;

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase); // Hace referencia a la clase que extiende

        // Después del super ya se puede instanciar nuevas propiedades
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} de los ${this.clan}`);
        // Para llamar algo de la clase padre
        super.quienSoy();
    }
}

const spiderman = new Heroe("peter parket","spiderman","Hey tú!");
console.log(spiderman);
spiderman.quienSoy();
