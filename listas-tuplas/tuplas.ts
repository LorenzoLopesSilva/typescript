//Array é trabalhada somente com um tipo de dado, e com as tuplas com diferentes tipos
let list: Array<number> = [1, 2, 3]; //Array
let tuple: [string, number, string]; //Tupla

//De forma diferente
let list2 = [1, 2, 3];
let tuple2 = ['Lorenzo Lopes', 19, 'lorenzo@email.com'];

let list3: [string, number] = ['Lorenzo Lopes', 1];
list3.push('Ingrid', 2);
console.log(list3);
console.log(list3[0]);

list3.forEach(element => {
    if(typeof element == 'string'){
        console.log(`Nome: ${element}`)
    }
    else{
        console.log(`ID: ${element}`)
    }
});
