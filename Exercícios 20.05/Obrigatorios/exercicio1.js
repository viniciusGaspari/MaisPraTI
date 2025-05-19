// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar 
// utilizando uma estrutura de controle if. 


const prompt = require('prompt-sync')()

let entrada = prompt("Insira um valor: ").trim(); 
let num = Number(entrada); 
let continuar;

if(entrada === "" && isNaN(num)){
    continuar = false
    console.log("Necessário inserir um valor")
}
if(entrada !== "" && !isNaN(num)){
    continuar = true
}

while (continuar) { 
    if (num % 2 === 0) { 
        console.log("par");
    } else { 
        console.log("ímpar");
    }

    entrada = prompt("Continuar? s/n: ").toLowerCase().trim();
    
    if (entrada === "s") {
        entrada = prompt("Insira um novo valor: ").trim();
        num = Number(entrada);
        continuar = entrada !== "" && !isNaN(num);
    } else {
        continuar = false;
        console.log("Programa finalizado.");
    }
}

