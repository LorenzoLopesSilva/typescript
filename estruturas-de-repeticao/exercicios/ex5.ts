//Aluno e nota
let alunoNota = ["Lorenzo", 8.5, "Rafa", 9, "Lucas", 10];
let nome: String = "";
let nota: Number = 0;

for(let item of alunoNota){

    if(typeof item == "string"){
        nome = item;
    }
    else{
        nota = item;
        console.log(`Aluno: ${nome} | Nota: ${nota}`);
    }
    
}