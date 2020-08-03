const notas = [5.4, 7.7, 9.5, 2.5]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Lucas",
    sobrenome: "Felipe",
    idade: 19,
    peso: 50
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
console.log(pessoa.length)