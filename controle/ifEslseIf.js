Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResult = function(nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de Honra !")
    }else if(nota.entre(7, 8.99)) {
        console.log("Aprovado !")
    }else if(nota.entre(4, 6.99)){
        console.log("Recuperação !") 
    }else if(0, 3.99) {
        console.log("Reprovado !")
    }else{
        console.log("Nota Invalida !")
    }
}

imprimirResult(6)
imprimirResult(9)
imprimirResult(3)
imprimirResult(8)