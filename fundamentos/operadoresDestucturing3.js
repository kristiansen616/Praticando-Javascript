function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 20, min: 200}
console.log(rand(obj))
console.log(rand({min: 900}))
console.log(rand({max: 100}))
console.log(rand({}))
console.log(rand())