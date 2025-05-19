// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let prompt = require("prompt-sync")()

let entrada = []

while (entrada.length < 5) { // Corrigido: Limite de 5 entradas
    let numero = Number(prompt("Digite um valor numérico: "));

    while (isNaN(numero)) { // Corrigido: Verifica se 'numero' é inválido
        numero = Number(prompt("Valor inválido! Digite novamente um valor: "));
    }

    entrada.push(numero);
}

let somaTotal = 0;
entrada.forEach(numeros => somaTotal += numeros);


console.log(somaTotal)