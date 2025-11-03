//---Tipos de união
let x: string | number;

//---Tipos de intersecção
//Defina dois tipos de representam caracteristicas diferentes
type HasName = {name: string};
type HasAge = {age: number};

//Crie um tipo de interseção combinando ambas as caracteristicas
type Person = HasName & HasAge;

//Crie um objeto que satisfaça o tipo de interseção
const person: Person = {
    name: 'Lorenzo',
    age: 19,
};

console.log(person);
//Aqui existem dois tipos, cada um representando um objeto com propriedades especificas
//Em seguida é criado um tipo intersection, juntando ambas as propriedades
//Por fim um objeto person é criado com o tipo Person

//---Genéricos
function swap<T> (x: T, y: T): void{
    const temp = x;
    x = y;
    y = temp;
}

let a = 10;
let b = 20;

swap(a, b);
console.log(a);
console.log(b); //essa função não está funcional

