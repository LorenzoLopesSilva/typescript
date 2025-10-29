interface Pessoa{
    nome: string;
    edv: number;
}

interface Gestor{
    setorResponsavel: string;
}

type PessoaGestor = Pessoa & Gestor

const gestor1: PessoaGestor = {
    nome: "Lorenzo",
    edv: 1234,
    setorResponsavel: "TI"
}

console.log(gestor1)