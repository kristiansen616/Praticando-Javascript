function Pessoa() { // Note a number NaN
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

function Pessoa1 () { // Primeira possibilidade 
    this.idade = 0 

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new Pessoa1

function Pessoa2 () { // segunda possibilidade
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa2