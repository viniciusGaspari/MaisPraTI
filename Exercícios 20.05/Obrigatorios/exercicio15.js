// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let prompt = require("prompt-sync")();
let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
let i = 1;

while (i <= numero) {
    fatorial *= i;
    i++;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);