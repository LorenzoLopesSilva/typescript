interface Pessoa{
    id: number;
    nome: string;
    bonus?: number;

}

let pessoa1: Pessoa = {
    id: 1,
    nome: "Lorenzo",
    bonus: 0.10
}

let pessoa2: Pessoa = {
    id: 2,
    nome: "Rafa",
}

function exibir(pessoa: Pessoa){
    console.log(`Olá ${pessoa.nome}`)
    if (pessoa.bonus){
        console.log(`Você possui um bonus de ${pessoa.bonus}`)
    }
    else{
        console.log("Você não tem um bônus disponivel. ")
    }
}

exibir(pessoa1)
exibir(pessoa2)