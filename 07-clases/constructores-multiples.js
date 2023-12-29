
class Persona {

    static constByObject({ nombre, apellido, pais }){ //destructuración de argumentos
        return new Persona( nombre, apellido, pais);
    }
    
    constructor(nombre, apellido, pais) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre} - ${this.apellido} - ${this.pais}`);
    }
}

const rob = {
    nombre: 'rob',
    apellido: 'rs',
    pais: 'ESP'
}

const persona1 = new Persona( 'Robrt', 'Sal', 'UK');
const persona2 =Persona.constByObject( rob );

persona1.getInfo();
persona2.getInfo();