function calcDesconto(preco, desconto) {
    if (desconto === void 0) { desconto = 0.10; }
    var valor_comdesconto = preco - preco * desconto;
    console.log("O valor com desconto \u00E9: R$".concat(valor_comdesconto.toFixed(2)));
}
calcDesconto(1000);
calcDesconto(1000, 0.2);
