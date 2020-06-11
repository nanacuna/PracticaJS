numeros = [1, 2, 3];

const suma = numeros.reduce(function(acumulador, elemento) {
    return acumulador += elemento;
}, 10);


console.log(suma);