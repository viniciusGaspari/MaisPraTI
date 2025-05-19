// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let prompt = require("prompt-sync")()
let continuar = "s"

while(continuar === 's'){
    let entrada = prompt("Qual é o seu peso?: ")
    let sexo = prompt("Homem ou mulher? (h/m): ")
    let peso = Number(entrada)

    if(entrada === "" || sexo === "" || isNaN(peso)){
        console.log("Valores inválidos")
        let entrada = prompt("Qual é o seu peso?: ")
        let sexo = prompt("Homem ou mulher? (h/m): ")
    }
    if (sexo !== "h" || sexo !== "m"){
        sexo = prompt("Sexo inválido! Insere valor válido: ")    
    }
        if(sexo === "m"){
            if(peso >= 100){
                console.log("Obesidade")
            }
            else if(peso >= 80){
                console.log("Sobrepeso")
            }
            else if(peso >= 50){
                console.log("Peso normal")
            }
            else if(peso <= 50){
                console.log("Baixo peso")
            }
        } else if(sexo === "h"){
            if(peso >= 120){
                console.log("Obesidade")
            }
            else if(peso >= 100){
                console.log("Sobrepeso")
            }
            else if(peso >= 70){
                console.log("Peso normal")
            }
            else if(peso <= 50){
                console.log("Baixo peso")
            }
        }
        continuar = prompt("Gostaria de continuar medindo o seu IMC? (s/n): ")

        if(continuar !== "s"){
            console.log("Operação finalizada")
        }
}