function fatorial(n){
    if(n < 0){
        throw new Error("Erro!")
    }
    if(n === 1){
        return 1
    }
}

console.log(fatorial(-1))
