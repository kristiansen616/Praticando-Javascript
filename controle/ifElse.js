const imprimiresult = function(nota) {
    if(nota > 7) {
        console.log("Aprovado, " + nota)
    }else{
        console.log("Reprovado, " + nota)
    }
}

imprimiresult(5)
imprimiresult(9)
imprimiresult("Queijo") // cuidado !!!