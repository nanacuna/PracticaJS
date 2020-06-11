let binario = 100;

let bin = binario.split('').reverse();

let decimal = bin.reduce(function(acummulator, element, index){
    if (Number(element) === 1)
        acummulator += 2 ** index;
    return acummulator;
}, 0)

console.log(decimal);