class Usuario {
    constructor (user, name, email, pass){
        //  let opciones = {};
         this.usuario = user;
         this.nombre = name;
         this.email = email;
         this.password = pass;
    }
  }
  Usuario.prototype.saludar = function(){
    return `Hola, mi nombre es ${this.nombre}.`;
  }

  let user1 = new Usuario('nan.acuna','nan','nanacuna1992@gmail.com','nan123');

  console.log(user1.saludar());

  console.log(Usuario);