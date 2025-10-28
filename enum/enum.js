var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
var hoje = DiaDaSemana.Terca;
console.log(hoje);
console.log(DiaDaSemana[6]);
var Pessoa;
(function (Pessoa) {
    Pessoa["nome"] = "Lorenzo";
    Pessoa[Pessoa["idade"] = 19] = "idade";
})(Pessoa || (Pessoa = {}));
console.log("Ol\u00E1 ".concat(Pessoa.nome, "! Voc\u00EA tem ").concat(Pessoa.idade));
