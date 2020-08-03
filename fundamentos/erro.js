function tratarerro(erro) {
    throw{
        name: erro.name,
        msg: erro.mensage,
        data: new Date
    }
}

function imprimir(obj) {
    try{
        console.log(obj.name.toUppercase() + ("!!!"))
    }catch(e){
            tratarerro(e)          
    }finally{
        console.log("Final")
    }
}
    
const obj = {nome:"Roberto"}
imprimir(obj)

