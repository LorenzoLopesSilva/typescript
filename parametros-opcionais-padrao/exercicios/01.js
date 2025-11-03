var pessoa1 = {
    id: 1,
    nome: "Lorenzo",
    bonus: 0.10
};
var pessoa2 = {
    id: 2,
    nome: "Rafa",
};
function exibir(pessoa) {
    console.log("Ol\u00E1 ".concat(pessoa.nome));
    if (pessoa.bonus) {
        console.log("Voc\u00EA possui um bonus de ".concat(pessoa.bonus));
    }
    else {
        console.log("Você não tem um bônus disponivel. ");
    }
}
exibir(pessoa1);
exibir(pessoa2);
