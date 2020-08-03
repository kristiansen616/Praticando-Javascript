const xam = "blá blá" //contexto lexico 1
console.log(xam)

function exc() {
    const xam = 3.16 // contexto lexico 2
    return(xam)
}


// objetos sao grupos anhinhados de pares nome/valor
let ber = {
    nome: "Lucas",
    idade: 19,
    endereco:{
        rua: "Rua Louro X" ,
        numero: 213
    }
}

console.log(exc())
console.log(ber)