const somar = function(a: number, b: number){
    return a + b;
}

let calculo: number = 1000 + somar(10, 100);

console.log(calculo);

//----------------------------------------------

const numeros: number[] = [10, 20, 30];

numeros.forEach(function(n){
    console.log(n)
})