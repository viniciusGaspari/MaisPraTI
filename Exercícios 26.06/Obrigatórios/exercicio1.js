function ehDataValida (dia, mes, ano) {

    const data = new Date(ano, mes - 1, dia)

    return (
        data.getDate() === dia &&
        data.getMonth() === mes -1 &&
        data.getFullYear() === ano
    )

}

console.log(ehDataValida(29, 2, 2024)); // true (Ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (Ano não bissexto)
console.log(ehDataValida(31, 4, 2025)); // false (Abril tem 30 dias)
console.log(ehDataValida(15, 10, 2023)); // true (Data válida)
