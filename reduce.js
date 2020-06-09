let array = [1, 2, 3, 4, 5, 5];

function sumar (resultado, num){
    return resultado += num;
}

// let rest = array.reduce(sumar);//Acá le paso la función al método reduce

let rest = array.reduce((acum, num) => acum += num);//Acá le declaro la función dentro del método reduce

console.log(rest);