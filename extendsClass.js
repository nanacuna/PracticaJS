class Person{
    constructor (nombre, apellido){
        this.nombre = nombre || 'Nancy';
        this.apellido = apellido || 'Acuña';
    };

    getSaludar (){
        return `Hello ${this.nombre}`;
    };
} 

   
class Empleado extends Person {
    constructor(nombre, apellido, empleo, sueldo){
        super(nombre, apellido);
        this.empleo;
        this.sueldo
    }
}

let nan = new Person('Nancy', 'Acuña');
console.log(nan);

let agus = new Empleado ('Agustin', 'Achille', 'Software Engenner', '100000000');

console.log(agus.getSaludar());