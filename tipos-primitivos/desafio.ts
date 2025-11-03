function processarValor(valor: unknown): number | string{
    if(typeof valor == 'number'){
        return valor * 2;
    }
    else if(typeof valor == 'string'){
        return valor.toUpperCase();
    }
    else{
        return 'Tipo não suportado'
    }
}

let nome: string = 'Lorenzo';
let idade: number = 19;
let isAdm: boolean = true;

console.log(processarValor(nome));
console.log(processarValor(idade));
console.log(processarValor(isAdm));