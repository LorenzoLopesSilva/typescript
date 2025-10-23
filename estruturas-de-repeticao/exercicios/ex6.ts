//Media das notas
let alunoNota = ["Lorenzo", 8.5, "Rafa", 9, "Lucas", 10];

let soma: number = 0;
let numeros: number = 0;

for(let item of alunoNota){
    if(typeof item == "number"){
        soma += item;
        numeros ++;
    }
}
let media: number = soma/numeros;

console.log(`A média das notas é: ${media.toFixed(2)}`);