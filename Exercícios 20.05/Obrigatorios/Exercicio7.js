// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, é R$ 0,25 /se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require("prompt-sync")()
let maca = "maça"

let compras = []
let valorTotal = 0;

let continuar = prompt("Comprar maçã? (s/n): ");
while (continuar !== "s" && continuar !== "n") {
    resposta = prompt("Valor inválido! (s/n):");
}

while(continuar === "s"){
if(compras.length < 12){
    valorTotal += 0.30
    console.log("valor total = " + "0.30")
    compras.push(maca)

} else if (compras.length > 12){
    console.log("valor total = " + "0.25")
    valorTotal += 0.25
    compras.push(maca)
}
    console.log(compras)
    console.log(valorTotal)

    continuar = prompt("Continuar?: (s/n) ")

    while (continuar !== "s" && continuar !== "n") {
        continuar = prompt("Valor inválido! (s/n): ");
    }

}