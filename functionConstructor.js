function crearClass(){
    function Usuario (opciones){
          this.usuario = opciones.usuario;
          this.nombre = opciones.nombre;
          this.email = opciones.email;
          this.password = opciones.password;
    };
    Usuario.prototype.saludar = function(){
        return 'Hola, mi nombre es ' + this.nombre + '.'
    }
    return Usuario;
}

let crear = crearClass();

let creando = new crear({usuario: 'nan', nombre: 'nancy', email: 'nanacuna1992@gmail.com', password: 'abc123'});
console.log(creando);
console.log(creando.saludar());


let creando1 = new crear({usuario: 'martin.alarcon',
                        nombre: 'martin', 
                        email: 'mma_@gmail.com', 
                        password: 'abc111'});
console.log(creando1);
console.log(creando1.saludar());

//========================================\\

function Saludo(){
    this.first = 'hola';
    this.second = 'chau';
    this.third = 'bye';
}

Saludo.prototype.saludando = function(){
    return 'Helloooooooooooooo!!!!!!!!!!';
}

let tipo = new Saludo();

console.log(tipo.saludando());

console.log(tipo);