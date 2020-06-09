// function Usuario(userName, pass) {
//     this.user = userName;
//     this.pass = pass; 
// }

// Usuario.prototype.isValid = function(){
//     if(this.user.includes('.')){
//         return 'Valid User';
//     }
//     else{
//         return 'Invalid User';
//     }
// }

// let user1 = new Usuario('Nan.acuna');

// console.log(user1.isValid());




///////////////////////////////////////////////////////////////////////////////
let opciones = {
    usuario : null,
    nombre : null,
    email : null,
    password : null
}


class Usuario {
    constructor(usuario, nombre, email, password){
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
  }
  Usuario.prototype.saludar = function(){
    return 'Hola, mi nombre es ' + this.usuario + '.';
  }

let usu1 = new Usuario('nan');


console.log(usu1.saludar());