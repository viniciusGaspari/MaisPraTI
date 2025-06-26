const prompt = require('prompt-sync')()

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * (100 + 1)) + 1
}

let adivinhar = Number(prompt("Adivinha o número: "))

while(isNaN(adivinhar)){
    adivinhar = Number(prompt("Numero inserido não é um número!: "))
}

const numRandom = gerarNumeroAleatorio();

while(adivinhar !== numRandom){
    if(adivinhar < numRandom){
        console.log("Mais alto")
    }
    if(adivinhar > numRandom){
        console.log("Mais baixo")
    }
    adivinhar = Number(prompt("Outro palpite: "))
}

console.log("Número correto é: " + numRandom)