// coleção dinâmica de pares chave/valor

const produto = new Object
produto.name = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 90000,
    proprietario: {
        nome: 'Icaro',
        idade: 56,
        endereco: {
           rua: "Rua Americana",
           numero: 320
        }
    },
    condutores: [{
        nome: 'Rosa',
        idade: 50
    }, {
        nome: 'Henrique',
        idade: 25
    }],
    calcularValorSeguro: function() {

    }

}

carro.proprietario.endereco.numero = 540
carro['proprietario'] ['endereco'] ['rua'] = 'Rua Santos'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)