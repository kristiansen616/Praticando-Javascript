const valores =[7, 1, 3, 4, 6.5]

console.log(valores[0], valores[4])

console.log(valores[5])

valores[5] = 10.4

console.log(valores)
console.log(valores.length) //quantidade de dados no array

valores.push({id: 34}, true, NaN, 'kkk')
console.log(valores)

console.log(valores.pop()) //tira o ultimo dado do array

delete valores[8]

console.log(valores)

console.log(typeof valores)
