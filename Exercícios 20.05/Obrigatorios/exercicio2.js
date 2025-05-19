// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let prompt = require("prompt-sync")();

let entrada = prompt("Insira a idade: ").trim();
let idade = Number(entrada);

if (entrada === "" || isNaN(idade)) { 
    console.log("Valor inválido");
} else {
    if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 18) {
        console.log("Adolescente");
    } else if (idade <= 24) {
        console.log("Adulto");
    } else if (idade <= 60) {
        console.log("Senhor de idade");
    } else {
        console.log("Idoso");
    }
}
