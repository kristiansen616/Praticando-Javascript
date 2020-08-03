 const notas = [7.1, 8.2, 5.8, 4.9, 9.5, 8.5, 6.5]

 //Sem callback

const notasbaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

//Com callback

notasbaixas2 = notas.filter(function (nota){
    return nota < 7 
})

console.log(notasbaixas2)

//Com callback usando Arrow Function

notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)