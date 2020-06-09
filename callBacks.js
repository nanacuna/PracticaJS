let array = [1,2,3,4,5];
let sum;


function sumarArray (array, cb){
    // let guardar = (array, function(){
        if(typeof array === 'object'){
            // for (let i = 0; i < array.length; i++) {
            //     cb += array[i];
            // }
            array.forEach(function(element) {
                cb(element);
            });
        }
    // });

    // array.forEach(function(element) {
    //     cb.push(element);
    // });

    console.log(array);
    console.log(cb);
    // console.log(guardar());
    // let sumar = function(sum, guardar){

    // }
}

sumarArray(array, sum);



function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo('Dan', decirHolaAlUsuario); // 'Hello Dan!'
crearSaludo('Dan', decirAdiosAlUsuario); // 'Goodbye Dan!'