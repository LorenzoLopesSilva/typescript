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

const pedido1: Pedido