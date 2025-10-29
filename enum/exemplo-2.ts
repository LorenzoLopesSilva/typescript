enum Acesso{
    Admin,
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
    
}