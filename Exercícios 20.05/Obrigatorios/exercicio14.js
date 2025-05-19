// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let prompt = require("prompt-sync")();
let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);