enum Acesso{
    Admin = 1,
    Gerente,
    Usuario
}

interface Users{
    id: number;
    nome: string;
    acesso: Acesso
}

const usuarios: Users[] = [
    {id: 1, nome: "Admin", acesso: Acesso.Admin},
    {id: 2, nome: "Lorenzo", acesso: Acesso.Gerente},
    {id: 3, nome: "Kauan", acesso: Acesso.Usuario},
    {id: 4, nome: "Rafa", acesso: Acesso.Usuario}
]

for (let usuario of usuarios){
    if (usuario.acesso == 1){
        console.log(`Olá ${usuario.nome}! Seu acesso é total.`);
    }
    else if (usuario.acesso == 2){
        console.log(`Olá ${usuario.nome}! Seu acesso é parcial.`);
    }
    else{
        console.log("Acesso negado");
    }
}
