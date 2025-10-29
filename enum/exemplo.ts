enum StatusPedido {
    Pendente = "PENDENTE",
    Processando = "PROCESSANDO",
    Enviado = "ENVIADO",
    Entregue = "ENTREGUE",
    Cancelado = "CANCELADO"

}

interface Pedido{
    id: number;
    cliente: string;
    valorTotal: number;
    status: StatusPedido;
}

const pedido1: Pedido = {
    id: 1,
    cliente: "Lorenzo",
    valorTotal: 100,
    status: StatusPedido.Processando
};

function atualizarStatus(pedido: Pedido, novoStatus: StatusPedido){
    pedido.status = novoStatus
    console.log(`Pedido ${pedido.id} agora está ${pedido.status}`)
}

atualizarStatus(pedido1, StatusPedido.Enviado)