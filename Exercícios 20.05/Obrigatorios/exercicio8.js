// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let prompt = require("prompt-sync")()

let valores = []
while (valores.length < 2) {
    let entrada = Number(prompt("Digite um valor numérico: "));
    
    while (isNaN(entrada)) {
        entrada = Number(prompt("Valor inválido! Digite novamente um valor numérico: "));
    }

    if (!valores.includes(entrada)) {
        valores.push(entrada);
    } else {
        while (valores.includes(entrada)) {
            entrada = Number(prompt("Há valores iguais! Digite outro valor: "));
        }
        valores.push(entrada); // Adiciona o novo valor válido
    }
}


console.log(valores)

