//Funciones constructoras y prototipos

function Person (name, lastName){
    this.name = name || 'Nancy';
    this.lastName = lastName || 'Acuña';
}


let gonza = new Person();
console.log(gonza);

let martin = new Person('Martin', 'Alarcon');
console.log(martin);

let nan = new Person(undefined, 'Alarcon');
console.log(nan);

let agus = new Person ('Agus');
console.log(agus);


function NuevaPersona(nombre, apellido, edad){
    Person.call(this, nombre, apellido);
    this.edad = edad;
};

//////////////////////////////////////////////////////////
NuevaPersona.prototype = Object.create(Person.prototype);
NuevaPersona.prototype.constructor = NuevaPersona;
console.log(NuevaPersona);
console.log(NuevaPersona.__proto__);