// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
let prompt = require("prompt-sync")();

console.log("Lista de Produtos:" +
    "\n1. Mouse" +
    "\n2. Teclado" +
    "\n3. Fone");

let carrinho = [];
let continuar = "s";

while (continuar === "s") {
    let entrada = prompt("Qual produto deseja adicionar ao carrinho? (Insira o número do produto): ").trim();
    let num = Number(entrada);

    if (entrada === "" || isNaN(num)) {
        console.log("Valor inválido! Insira um número correspondente a um produto.");
    } else {
        switch (num) {
            case 1:
                carrinho.push("Mouse");
                console.log("Mouse adicionado ao carrinho.");
                break;
            case 2:
                carrinho.push("Teclado");
                console.log("Teclado adicionado ao carrinho.");
                break;
            case 3:
                carrinho.push("Fone");
                console.log("Fone adicionado ao carrinho.");
                break;
            default:
                console.log("Opção inválida! Escolha um número entre 1 e 3.");
                continue; // Volta ao início do loop sem perguntar se deseja continuar
        }
    }

    console.log("🛒 Seu carrinho: " + carrinho);

    continuar = prompt("Deseja adicionar mais produtos ao carrinho? (s/n): ").trim().toLowerCase();

    while (continuar !== "s" && continuar !== "n") {
        console.log("Opção inválida! Digite 's' para continuar ou 'n' para finalizar.");
        continuar = prompt("Deseja adicionar mais produtos ao carrinho? (s/n): ").trim().toLowerCase();
    }
}

console.log("Programa finalizado. Seu carrinho contém:", carrinho);
