function sonoticiaBoa(nota) {
    if(nota >= 7) {
            console.log("Aprovado," + nota)
    }
}

sonoticiaBoa(8.5)
sonoticiaBoa(5.5)

function soverdades(valor) {
        if(valor) {
                console.log("È VERDADE," + valor)            
        }
} 

soverdades()
soverdades("")
soverdades(NaN)
soverdades(0)
soverdades(null)
soverdades(undefined)
soverdades(-1)
soverdades(3)
soverdades(" ")
soverdades([])
soverdades({})
soverdades(["texto", 2, 5])