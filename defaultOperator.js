//Funciones constructoras y prototipos
function Person (name, lastName){
    this.name = name || 'Nancy';
    this.lastName = lastName || 'Acuña';
}

Person.prototype.getName = function (){
    return `My name is ${this.name}`;
}

let gonza = new Person();
console.log(gonza);

let martin = new Person('Martin', 'Alarcon');
console.log(martin);

let nan = new Person(undefined, 'Alarcon');
console.log(nan);

let agus = new Person ('Agus');
console.log(agus);


function Empleados(nombre, apellido, empleo, sueldo){
    Person.call(this, nombre, apellido);
    this.empleo = empleo;
    this.sueldo = sueldo;
};

//////////////////////////////////////////////////////////
Empleados.prototype = Object.create(Person.prototype);
Empleados.prototype.constructor = Empleados;
// console.log(Empleados);
console.log(Empleados.__proto__);

let empleado1 = new Empleados('Nancy Acuña');

console.log(empleado1.getName());