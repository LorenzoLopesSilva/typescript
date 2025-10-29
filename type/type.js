//Similar ao Enum. O type é utilizado diretamente com os valores. 
var pessoa1 = {
    nome: "Lorenzo",
    acesso: "Gerente"
};
//-- Esse caso vai dar erro pois o valor "User" não se encontra no type Acesso
// const pessoa2: Pessoa = {
//     nome: "User",
//     acesso: "User"
// }
// 🔸 Por que usar type
// Quando você precisa de flexibilidade e leveza;
// Quando os valores não precisam ser acessados em tempo de execução;
// Quando quer tipar objetos complexos ou unir tipos.
