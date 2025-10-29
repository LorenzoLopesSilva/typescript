enum Acesso{
    Admin = 1,
    Gerente,
    Cliente
}

interface Pessoa{
    id: number,
    nome: string,
    acesso: Acesso
}

const pessoa1: Pessoa = {
    id: 1,
    nome: "Lorenzo",
    acesso: Acesso.Admin 
}

const pessoa2: Pessoa = {
    id: 2,
    nome: "Gerente Supremo",
    acesso: Acesso.Gerente
}

function verificarAcesso(pessoa: Pessoa){
    if (pessoa.acesso == 1){
        console.log(`Olá ${pessoa.nome}! Seu acesso é total.`);
    }
    else if (pessoa.acesso == 2){
        console.log(`Olá ${pessoa.nome}! Seu acesso é parcial.`);
    }
    else{
        console.log("Acesso negado");
    }
}

verificarAcesso(pessoa1);
verificarAcesso(pessoa2)