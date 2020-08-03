let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

console.log("Os verdadeiros ...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"teste")
console.log(!!Infinity)
console.log(!!{})
console.log(!![])
console.log(!!(isAtivo = true))

console.log("os falsos ...")
console.log(!!0)
console.log(!!"")
console.log(!!undefined)
console.log(!!null)
console.log(!!NaN)
console.log(!!(isAtivo = false))