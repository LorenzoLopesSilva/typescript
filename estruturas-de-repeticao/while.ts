let contador: number = 0;
while (contador < 5){
    console.log(contador);
    contador++;
}
console.log("")
//Break e continue
for (let i = 0; i < 10; i++){
    if(i === 5){
        console.log(i);
        break;
    }
    if (i % 2 === 0){
        console.log(i);
        continue;
    }
}