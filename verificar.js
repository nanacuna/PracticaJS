let users = {
    user : 'nan',
    pass : null,
    favoriteFood : function(){
        return 'My favorite food is burger';
    },
    intereses : []
}

console.log(Object.keys(users));

let x = 'user';

Object.keys(users).forEach(function(element) {
    if (element === x){
        console.log('La clave es: ',element);
    }
})

let str = 'favoriteFood';


let test = {
}


function esNull (test){
    console.log(Object.values(test));
}

console.log('Es null: ', esNull(test));


console.log('Values: ', Object.entries(users));


console.log('tienePass: ', users[str]());


Object.entries(users).forEach(element => {
    if (element[0] === 'pass' && element[1] === null){
        element[1] = '555';
        console.log(element);
    }
})

// let cont = users.favoriteFood();

// console.log(cont);

// function verif (users, cont){
//     for (const prop in users) {
//         if (users.hasOwnProperty(cont)) {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(Object.entries(users));

// console.log(Object.values(users));

// let algo = false;

// Object.values(users).forEach(element => {
//     if (element === cont){
//         algo = true;
//     }
// });

// console.log(algo);

// let uno = users.hasOwnProperty(cont)

// console.log(uno);

// console.log(verif(users, cont));


// function invocar (objeto, str){
//     cont = objeto.str;
//     return cont;
// }

// console.log('Invocando: ', invocar(users, cont));