//Função de identidade genérica
function identity (value: Number): Number{
    return value;
} 
console.log(identity(1))

//Usando o generic para uma função que pode assumir qualquer tipo
function identityG<T> (value: T): T{
    return value;
}
console.log(identityG<number>(2))

function identityG2<T,U> (value: T, message: U) : T{
    console.log(message);
    return value;
    
}
identityG2<number, string>(42, "Hello World");

//---
function dadosVariados<T> (value: T): T {
    return value;
}

console.log(dadosVariados<number>(19));
console.log(dadosVariados("Olá Lorenzo"));
console.log(dadosVariados<number[]>([1, 2, 3]))
