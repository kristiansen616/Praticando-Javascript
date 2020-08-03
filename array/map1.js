const nums = [1, 2, 3, 4, 5]

// For com propósito
let dobro = nums.map(function(e) {
    return e * 2
})

console.log(dobro)

const soma10 = function(e) {
    return e + 10
}

const triplo = function(e) {
    return e * 3
}

const paradinheiro = function(e) {
    return `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
}

dobro = nums.map(soma10).map(triplo).map(paradinheiro)
console.log(dobro)