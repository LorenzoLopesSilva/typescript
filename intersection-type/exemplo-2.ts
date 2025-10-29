interface Setor{
    nomeSetor: string;
    nFuncionarios: number;
}
interface Funcionario{
    edv: number;
    nome: string;
}

interface Gestor extends Funcionario{
    bonus: number;
    placaVeiculo: string;
}

type GestorSetor = Gestor & Setor;

const gestores: GestorSetor[] = [
    {edv: 1111, nome: "Lorenzo", nomeSetor: "CyberSegurança", nFuncionarios: 20, bonus: 0.10, placaVeiculo: "00PSW3"},
    {edv: 2222, nome: "Kauan", nomeSetor: "Desenvolvimento", nFuncionarios: 34, bonus: 0.05, placaVeiculo: "1ASR43"},
    {edv: 3333, nome: "Rafa", nomeSetor: "Infraestrutura", nFuncionarios: 40, bonus: 0.10, placaVeiculo: "89IUA2"},
]

for (let gestor of gestores){
    console.log(`\nOlá ${gestor.nome}. Você é gestor da área ${gestor.nomeSetor}`);
    console.log(`Seu setor tem ${gestor.nFuncionarios} funcionarios.`);
}