 const soma = function(x, y) {
     return x + y
 }

 const imprimirResult = function(a, b, operacao = soma) {
     console.log(operacao(a,b))
 }

 imprimirResult(3,4)
 imprimirResult(3,4, soma)
 imprimirResult(3,4, function(x, y) {
     return x -y
 })
imprimirResult(3, 4, (x, y) => x * y) //Arrow function exemplo


const pessoa = { // função anônima dentro de um objeto
    falar: function () {
        console.log('Opá')
    }
}

pessoa.falar()


const pessoa1 = { // função anônima em um objeto usando arrow function
     falar1: () => {
        console.log('Opá')
    } 
}

pessoa1.falar1()