const pessoa = {
    nome: "Lucas",
    idade: 19,
    enderco: {
        rua: "xesque dele",
        numero: 123
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n, i)

const {sobrenome:s, bemHumarada:b = true} = pessoa
console.log(s, b)

const {enderco:{rua, numero}} = pessoa
console.log(rua, numero)