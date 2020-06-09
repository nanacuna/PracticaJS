// class String {
//     constructor(){
//         this.str = 'nancy';
//     }
// };

String.prototype.reverse = function(){
    return Object.values(this).reverse().join('');
};

let xyz = 'Hello';
let nan = 'Bye';
let gonza = 'peque';

console.log(xyz.reverse());
console.log(nan.reverse());
console.log(gonza.reverse());