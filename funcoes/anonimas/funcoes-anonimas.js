var somar = function (a, b) {
    return a + b;
};
var calculo = 1000 + somar(10, 100);
console.log(calculo);
//----------------------------------------------
var numeros = [10, 20, 30];
numeros.forEach(function (n) {
    console.log(n);
});
var pessoas = [
    { nome: "Lorenzo", idade: 19 },
    { nome: "Ingrid", idade: 17 },
    { nome: "Rafa", idade: 19 }
];
// let maiores = pessoas.filter((n: Pessoa) => n.idade >= 18);
var maiores = pessoas.filter(function (n) {
    return n.idade >= 18; //NÂO ESQUECER O RETURN
});
for (var _i = 0, maiores_1 = maiores; _i < maiores_1.length; _i++) {
    var pessoa = maiores_1[_i];
    console.log("".concat(pessoa.nome, " \u00E9 maior de idade"));
}
