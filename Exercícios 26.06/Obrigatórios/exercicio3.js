function removerPalavraRepetida(texto){
    return [... new Set(frase.split(" "))].join(" ")
}

const frase = "olá olá mundo mundo"
const palavras = removerPalavraRepetida(frase)
console.log(palavras)