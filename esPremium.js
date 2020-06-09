let usuarios = [
    usuario1 = {
        esPrem : false
    },
    usuario2 = {
        esPrem : false
    },
    usuario3 = {
        esPrem : false
    },
    usuario4 = {
        esPrem : false
    },
    usuario5 = {
        esPrem : false
    },
    usuario6 = {
        esPrem : false
    }
]


// console.log(usuarios);

usuarios.forEach(element => {
    element.esPrem = true;
});

console.log(usuarios);
