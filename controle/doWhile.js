function getAleat (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}       

let opcao = -1

do {
    opcao = getAleat(-1, 5)
    console.log(`O numero escolhido foi ${opcao}`)
} while(opcao != -1) 


console.log("Fim")
