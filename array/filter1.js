const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const consultaPreco = function(produto) {
  return produto.preco >= 1000
}
const fragilidade = function(produto) {
    return produto.fragil
}


const result = produtos.filter(consultaPreco).filter(fragilidade)
console.log(result)