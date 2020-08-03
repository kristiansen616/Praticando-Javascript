function pessoa23 (nome1) {
     this.nome1 = nome1
         
    this.falar = function() {
        console.log(`Meu nome é ${this.nome1}`)
    }    
}

const P1 = new pessoa23("Lucas")
P1.falar()