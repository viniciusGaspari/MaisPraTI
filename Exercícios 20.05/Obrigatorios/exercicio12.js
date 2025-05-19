// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let prompt = require("prompt-sync")()

let entrada = Number(prompt("Digite um número para a tabuada até 10: "))
let total = 0

while(isNaN(entrada)){
    entrada = Number(prompt("Valor inválido! Digite um número para a tabuada: "))
}

for(i = 0; i <= 10; i++){
    total = entrada * i;
    console.log(entrada + " * " + i + " = " + total )
}

