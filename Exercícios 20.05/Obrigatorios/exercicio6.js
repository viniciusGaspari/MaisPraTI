// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let prompt = require("prompt-sync")()

console.log("Insira valores dos seguintes lados de um triângulo: ")

let a = prompt("A = ")
a = Number(a)
let b = prompt("B = ")
b = Number(b)
let c = prompt("C = ")
c = Number(b)

while(isNaN(a) || isNaN(b) || isNaN(c)){
    if(isNaN(a)){
        a = Number(prompt("Valor inválido A! Insira novamente: "))
    }
    else if(isNaN(b)){
        b = Number(prompt("Valor inválido B! Insira novamente: "))
    }
    else if(isNaN(c)){
        c = Number(prompt("Valor inválido C! Insira novamente: "))
    }
}

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo **Equilátero** - Todos os lados iguais.");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo **Isósceles** - Dois lados iguais.");
    } else {
        console.log("Triângulo **Escaleno** - Todos os lados diferentes.");
    }
} else {
    console.log("❌ Os valores fornecidos **não formam um triângulo**.");
}
