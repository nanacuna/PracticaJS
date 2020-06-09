let obj = {
    array : [
        objeto1 = {
            like : 2
        },
        objeto2 = {
            like : 5
        },
        objeto3 = {
            like : 3
        },
        objeto4 = {
            like : 15
        },
        objeto5 = {
            like : 10
        },
        objeto6 = {
            like : 15
        }
    ]
}

let sum = 0;

// obj.array.forEach(function(element){
//     sum += element.like;
// });


obj.array.forEach((element) => {sum += element.like});

console.log(sum);