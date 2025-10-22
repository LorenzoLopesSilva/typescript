//Numeros maiores que 50
let  numeros: number[] = [100, 20, 3, 45, 36, 400, 51, 50]

let maior50: number = 0;
for(let n of numeros){
    if(n > 50){
        maior50 += 1
    }
}
console.log(maior50);