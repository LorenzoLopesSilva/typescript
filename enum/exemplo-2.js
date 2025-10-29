var Acesso;
(function (Acesso) {
    Acesso[Acesso["Admin"] = 1] = "Admin";
    Acesso[Acesso["Gerente"] = 2] = "Gerente";
    Acesso[Acesso["Cliente"] = 3] = "Cliente";
})(Acesso || (Acesso = {}));
var pessoa1 = {
    id: 1,
    nome: "Lorenzo",
    acesso: Acesso.Admin
};
var pessoa2 = {
    id: 2,
    nome: "Gerente Supremo",
    acesso: Acesso.Gerente
};
function verificarAcesso(pessoa) {
    if (pessoa.acesso == 1) {
        console.log("Ol\u00E1 ".concat(pessoa.nome, "! Seu acesso \u00E9 total."));
    }
    else if (pessoa.acesso == 2) {
        console.log("Ol\u00E1 ".concat(pessoa.nome, "! Seu acesso \u00E9 parcial."));
    }
    else {
        console.log("Acesso negado");
    }
}
verificarAcesso(pessoa1);
verificarAcesso(pessoa2);
