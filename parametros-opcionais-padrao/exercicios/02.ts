function calcDesconto(preco: number, desconto: number = 0.10){
    let valor_comdesconto = preco - preco * desconto;
    console.log(`O valor com desconto é: R$${valor_comdesconto.toFixed(2)}`)

}

calcDesconto(1000)
calcDesconto(1000, 0.2)