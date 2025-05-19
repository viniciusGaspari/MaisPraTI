// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let prompt = require("prompt-sync")()

let entrada = prompt("Insira a nota da sua prova: ").trim()
let num = Number(entrada)

if(entrada === "" || isNaN(num)){
    console.log("Valor inválido")
} 
else if(!isNaN(num)){
    if(num >= 0 && num <= 3){
        console.log("Reprovado")
    } else if (num <= 7){
        console.log("Recuperação")
    } else if(num <= 10){
                console.log("Aprovado")
    }
}
    
