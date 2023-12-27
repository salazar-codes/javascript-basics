
class Persona {

    nombre = '';
    codigo = '';
    frase = 'ssss';

    constructor(nombre = 'Sin nombre', codigo= 'Sin codigo', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`Soy ${ this.codigo } y mi identidad es ${ this.nombre }`);
    }

    otroMetodo(){
        this.quienSoy();
    }
}

const spiderman = new Persona("peter parket","spiderman","Hey tú!");
console.log(spiderman.frase);

spiderman.quienSoy();
spiderman.otroMetodo();

