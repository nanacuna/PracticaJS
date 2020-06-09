let obj = {
    x : 0,
    incrementarX : function(){
        return this.x += 1;
    }
};

let str = 'incrementarX';

console.log('Nan: ',obj[str]());

function incrementar (obj, str){
    // Object.values(obj).forEach(element => {
    //     console.log(str)
    // });
    console.log(Object.keys(obj));
    console.log('1: ', obj.incrementarX());
    let func = str + '()';
    console.log('3: ', func);
    console.log(obj.incrementarX.call(str));
}



console.log(incrementar(obj, str));