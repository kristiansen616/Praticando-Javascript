function Carro(velocidademaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

//metodo publico 
this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidademaxima) {
        velocidadeAtual += delta
    }else {
        velocidadeAtual = velocidademaxima
    }
}

//metodo publico
this.getvelocidadeatual = function () {
    return velocidadeAtual
 }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())

console.log(typeof Carro)
console.log(typeof ferrari)