let array = [5, 2, 3, 4];

function pow (num){
    return num * num;
}

// let newArray = array.map(pow);//Paso una función al método map;

let newArray = array.map((element) => element * element);// Declaro una función dentro del método map e itero sobre c/ elemento.

console.log(newArray)