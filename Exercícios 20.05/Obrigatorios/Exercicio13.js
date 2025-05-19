// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let prompt = require("prompt-sync")();
let soma = 0;
let contador = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (0 para sair): "));

    if (numero === 0) {
        break; // Sai do loop quando 0 é digitado
    }

    soma += numero;
    contador++;
}

if (contador > 0) {
    let media = soma / contador;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi digitado.");
}