var gestores = [
    { edv: 1111, nome: "Lorenzo", nomeSetor: "CyberSegurança", nFuncionarios: 20, bonus: 0.10, placaVeiculo: "00PSW3" },
    { edv: 2222, nome: "Kauan", nomeSetor: "Desenvolvimento", nFuncionarios: 34, bonus: 0.05, placaVeiculo: "1ASR43" },
    { edv: 3333, nome: "Rafa", nomeSetor: "Infraestrutura", nFuncionarios: 40, bonus: 0.10, placaVeiculo: "89IUA2" },
];
for (var _i = 0, gestores_1 = gestores; _i < gestores_1.length; _i++) {
    var gestor = gestores_1[_i];
    console.log("\nOl\u00E1 ".concat(gestor.nome, ". Voc\u00EA \u00E9 gestor da \u00E1rea ").concat(gestor.nomeSetor));
    console.log("Seu setor tem ".concat(gestor.nFuncionarios, " funcionarios."));
}
