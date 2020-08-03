console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Lucas', 'Carlos')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Albia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados[0])
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Au')
console.log(aprovados)