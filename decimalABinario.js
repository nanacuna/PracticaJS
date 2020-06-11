let decimal = '000005000';

decimal.replace(/^0+/, '');

let bin = [];
let conciente = Math.floor(decimal / 2);

bin.push(decimal % 2);

if (decimal > 0){
    while (conciente > 1){
        bin.push(conciente % 2);
        conciente = Math.floor(conciente / 2);
    }
    bin.push(conciente);
}else{
    bin.push(0);
}

console.log(Number(bin.reverse().join('')));