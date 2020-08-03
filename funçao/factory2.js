// Melhor Forma de fazer
function criarProduto(nome, preco) {
    return {
        nome,
        preco, 
        desconto: preco - ((preco * 5) / 100)
    }
}

console.log(criarProduto("Notebook", 1999.00))
console.log(criarProduto("Chinelo", 30.00))

// Outra Forma não muito boa
function criarProduto1(nome1, preco1) {
    return {
        nome1: 'placa de Vídeo',
        preco1: 799.00, 
        desconto: 0.1
    }
}

console.log(criarProduto1())
