//Similar ao Enum. O type é utilizado diretamente com os valores. 
//Aparentemente não faz diferença nenhuma no javascript

type Acesso = "Admin" | "Gerente" | "Usuario";
//Dessa forma, o Acesso permite apenas estes valores

interface Pessoa{
    nome: string;
    acesso: Acesso;
}

const pessoa1: Pessoa = {
    nome: "Lorenzo",
    acesso: "Gerente"
}

//-- Esse caso vai dar erro pois o valor "User" não se encontra no type Acesso
// const pessoa2: Pessoa = {
//     nome: "User",
//     acesso: "User"
// }

// 🔸 Por que usar type

// Quando você precisa de flexibilidade e leveza;

// Quando os valores não precisam ser acessados em tempo de execução;

// Quando quer tipar objetos complexos ou unir tipos.