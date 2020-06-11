// Function Constructor \\
function Usuario(userName, pass) {
    this.user = userName;
    this.pass = pass; 
}

Usuario.prototype.isValid = function(){
    if(this.user.includes('.')){
        return `Valid User`;
    }
    else{
        return `Invalid User`;
    }
}

let user1 = new Usuario('Nan.acuna');

console.log(user1.isValid());

// ==========================================================\\

// Class With Constructor \\
let opciones = {
    usuario : null,
    nombre : null,
    email : null,
    password : null
}


class Usuario {
    constructor(opciones){
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    getSaludar() {
      return `Hola, mi nombre es ${this.usuario}`;
    }
  }

let usu1 = new Usuario({usuario:'nan', 
                        nombre :'nan.acuna', 
                        email : 'nanacuna1992@gmal.com', 
                        password : 'abc123'});


console.log(usu1.getSaludar());