function saudar(nome?: string){
    if(nome){
        console.log(`Olá ${nome}!`);
    }
    else{
        console.log("Olá visitante!")
    }
}

saudar()
saudar("Lorenzo")