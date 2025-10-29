var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "PENDENTE";
    StatusPedido["Processando"] = "PROCESSANDO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
var pedido1 = {
    id: 1,
    cliente: "Lorenzo",
    valorTotal: 100,
    status: StatusPedido.Processando
};
function atualizarStatus(pedido, novoStatus) {
    pedido.status = novoStatus;
    console.log("Pedido ".concat(pedido.id, " agora est\u00E1 ").concat(pedido.status));
}
atualizarStatus(pedido1, StatusPedido.Enviado);
