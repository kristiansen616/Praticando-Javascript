const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigimas : funcional e Orienta a objeto

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()
