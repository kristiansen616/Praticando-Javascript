const ferrari = {
    modelo: 'F40',
    Velmax: 324
}

const volvo = {
    modelo: 'V40',
    Velmax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeeto() {}
console.log(typeof Object, typeof MeuObjeeto)
console.log(Object.prototype, MeuObjeeto.prototype)