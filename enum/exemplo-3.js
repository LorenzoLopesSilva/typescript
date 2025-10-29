var Acesso;
(function (Acesso) {
    Acesso[Acesso["Admin"] = 1] = "Admin";
    Acesso[Acesso["Gerente"] = 2] = "Gerente";
    Acesso[Acesso["Usuario"] = 3] = "Usuario";
})(Acesso || (Acesso = {}));
var usuarios = [
    { id: 1, nome: "Admin", acesso: Acesso.Admin },
    { id: 2, nome: "Lorenzo", acesso: Acesso.Gerente },
    { id: 3, nome: "Kauan", acesso: Acesso.Usuario },
    { id: 4, nome: "Rafa", acesso: Acesso.Usuario }
];
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var usuario = usuarios_1[_i];
    if (usuario.acesso == 1) {
        console.log("Ol\u00E1 ".concat(usuario.nome, "! Seu acesso \u00E9 total."));
    }
    else if (usuario.acesso == 2) {
        console.log("Ol\u00E1 ".concat(usuario.nome, "! Seu acesso \u00E9 parcial."));
    }
    else {
        console.log("Acesso negado");
    }
}
