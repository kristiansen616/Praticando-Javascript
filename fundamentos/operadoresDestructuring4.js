function rand([min = 0, max = 1000]) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const arr = [10, 80]
console.log(rand(arr))
console.log(rand([900]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())