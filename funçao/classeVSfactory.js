class pessoa {
    constructor(nome) {
        this.nome = nome
    }

falar() {
    console.log(`Meu nome é ${this.nome}`)
}}

const p1 = new pessoa('Lucas')
p1.falar()

function criarpessoa(nome) {
    return {
        falar(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const P2 = new criarpessoa('João')
P2.falar()