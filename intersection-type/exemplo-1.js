function exibirGestor(gestor) {
    console.log("Ol\u00E1 ".concat(gestor.nome, ". Voc\u00EA \u00E9 gestor do setor de ").concat(gestor.setor, "."));
    console.log("Seu setor tem ".concat(gestor.nSubordinados, " funcionarios subordinados."));
}
exibirGestor({
    nome: "Lorenzo",
    edv: 1234,
    setor: "TI",
    nSubordinados: 110
});
