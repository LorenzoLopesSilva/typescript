interface Funcionario{
    edv: number;
    nome: string;
}

type Setor = "TI" | "ADM";

//Repare que fiz a mesma coisa que o interface, porem com o type
type Gestor = {
    setor: Setor;
    nSubordinados: number;
}

type FuncionarioGestor = Funcionario & Gestor

function exibirGestor(gestor: FuncionarioGestor){
    console.log(`Olá ${gestor.nome}. Você é gestor do setor de ${gestor.setor}.`)
    console.log(`Seu setor tem ${gestor.nSubordinados} funcionarios subordinados.`)
}

exibirGestor({
    nome: "Lorenzo",
    edv: 1234,
    setor: "TI",
    nSubordinados: 110
})
