// armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4)

//armazenado uma função arrow em uma variavel, => substitui a palavra finction

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// Retorno Implicito essa forma e pra abreviar ainda mais 

const substracao = (a, b) => a - b
console.log(substracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')