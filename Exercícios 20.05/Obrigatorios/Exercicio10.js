// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require("prompt-sync")();

let entrada = Number(prompt("Insira um valor: "));

while(isNaN(entrada)){
    entrada = Number(prompt("Valor inválido! Digite novamente: "))
}

while (!(entrada === "")) {
    for(let i = 0; i <= 10; i++) { 
        console.log(entrada);
    }
    entrada = "";
}
