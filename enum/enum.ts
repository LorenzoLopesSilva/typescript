enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

let hoje: DiaDaSemana = DiaDaSemana.Terca

console.log(hoje)
console.log(DiaDaSemana[6])


//Não é muito recomendado usar tipos diferentes
enum Pessoa{
    nome = "Lorenzo",
    idade = 19
}

console.log(`Olá ${Pessoa.nome}! Você tem ${Pessoa.idade} anos.`)
