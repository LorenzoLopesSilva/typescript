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

//------------------ EXEMPLO ------------------

interface Pessoa{
    nome: string;
    idade: number;
}

let pessoas: Pessoa[] = [
    {nome: "Lorenzo", idade: 19},
    {nome: "Ingrid", idade: 17},
    {nome: "Rafa", idade: 19}
]

// let maiores = pessoas.filter((n: Pessoa) => n.idade >= 18);
let maiores: Pessoa[] = pessoas.filter(function(n: Pessoa){
    return n.idade >= 18; //NÂO ESQUECER O RETURN
});

for(let pessoa of maiores){
    console.log(`${pessoa.nome} é maior de idade`);
}