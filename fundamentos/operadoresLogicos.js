function compras(trabalho1, trabalho2){
        const comprarsorvete = trabalho1 || trabalho2
        const comprarTv50pl = trabalho1 && trabalho2
        const comprarTv32pl = trabalho1 != trabalho2 
        const ficarsauldavel = !comprarsorvete

        return {comprarsorvete, comprarTv50pl, comprarTv32pl, ficarsauldavel}
}

console.log(compras(true, false))
console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(false, false))