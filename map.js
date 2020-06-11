let array = [5, 2, 3, 4];

function pow (num){
    return num * num;
}

//Paso una función al método map;
let newArray1 = array.map(pow);
console.log(newArray1);

// Declaro una función dentro del método map e itero sobre c/ elemento.
let newArray2 = array.map((element) => element * element);

console.log(newArray2);


//========================More example map function===========================================//
let array = [1, 2, 3, 4];

function sum (num){
  return num + 1;
}

//Map pasando una función 
let newArray3 = array.map(sum);

//Map con arrow function
let newArray4 = array.map(num => num + 1);

//Map con anonymous function
let newArray5 = array.map(function (element){return element + 1});

console.log(newArray3);
console.log(newArray4);
console.log(newArray5);