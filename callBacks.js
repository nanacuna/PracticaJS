let array = [1,2,3,4,5];
let newArray = [];

function cb (num){
    newArray.push(num);
};

console.log(`New array vacío: ${newArray}`);

function sumarArray (array, cb){
    if(typeof array === 'object'){
        array.forEach((element) => cb(element));
    }
}

sumarArray(array, cb);

console.log(`New Array mapeado: ${newArray}`);

//=======================================\\

function decirHolaAlUsuario(usuario) {
    return `Hello ${usuario}!`;
}

function decirAdiosAlUsuario(usuario) {
    return `Goodbye ${usuario}!`;
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

console.log(crearSaludo('Nan', decirHolaAlUsuario)); // 'Hello Nan!'
console.log(crearSaludo('Nan', decirAdiosAlUsuario)); // 'Goodbye Nan!'