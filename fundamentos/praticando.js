var nome = ['Lucas', 'João', 'Marcelo']
var idade = `
    [12, 13, 22]
`
console.log(nome, idade)

let xs = true
const xv = false
const krd = 3

if (4 <= krd){
    console.log("VOCÊ morreu")
}else{
    console.log("Você Vive")
}

let opp  = ("Xvier")
let asd = 3.14

console.log(typeof opp)
console.log(typeof krd)
console.log(typeof xs)
console.log(typeof asd)

let a = 34
let b = 34
let soma = a + b

let c = 12 * (3 - 5) 
let d = (32 - 4) * 4
let soma2 = c <= d 
let soma3 = c == d
let soma4 = c != d
console.log(soma, soma2, soma3, soma4)

let xar = 1.23


console.log(Number.parseInt(xar))

let xd = "praticando JavaScript"

console.log("Eu tava " + xd)
console.log(`Eu tava ${xd} !`)

idade = [2, 54, 45]

console.log(idade[2])

console.log(idade)

console.log(idade.length)

idade.push('lista', {idade: 23})

console.log(idade)

let xesq = {}

xesq.lol = "Akali"
xesq.status = "Morta"

console.log(xesq)
console.log(xesq.lol)
console.log(idade.length)

xesq["cla"] = "ionia"

console.log(xesq)

xesq['rebelde'] = true

console.log(xesq)

console.log(!!xesq.rebelde)

console.log(!xesq.rebelde)

delete xesq.cla

console.log(xesq)

xesq.status = null

console.log(xesq)

console.log(!!xesq.status)

xesq.status = "viva"



console.log(!!xesq.status)

console.log(xesq)

if(xesq.status != true){
      console.log("desaparecida")
}else{
    console.log("Ionia")
}


const dre = []

for (var i = 0; i < 10;i++) {
    dre.push(function(){
        console.log(i)
    })
}

dre[2]()
dre[8]()

const lor = []

for (let i = 0; i < 15;i++) {
    lor.push(function(){
        console.log(i)
    })
}

lor[2]()
lor[12]()

let xz = []

xz.push('kk', 45)

console.log(xz.length)
console.log(xz)

let cdf = {}

cdf.name = "Lucas"

console.log(cdf)


let  ss = []

ss.push(23)

console.log(ss)

let xx = []
xx.push('ala', 56, true)
console.log(xx)

let ff = {}

ff.name = "Lucas"
ff.idade = 19

console.log(ff)
console.log(ff.idade)

let [rr, vb, ty] = [false, 'chato', 78]

console.log(rr, vb,  ty)

let xuxu = {
    hj: 'df',
    nm:445,
    hk: true
}

const {hj, hk} = xuxu

console.log(hj, hk)

const vc = {
    jogo: "Leuague Of Legends",
    personagem: "Kassadin",
    numropartidas: 30
}

console.log(vc)

const {jogo: j, personagem: perso, numropartidas: np} = vc
console.log(j, perso, np)

let bj = ["Lucas", "Bianca", "Mateus", "Laura"]

bj.push("Karina")

console.log(bj)