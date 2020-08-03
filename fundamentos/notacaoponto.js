console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Boa"

console.log(obj1)

function Obj(name) {
    this.name = name
    this.exec = function() {
        console.log('Exec.....')
    }
}

const Obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa") 
console.log(Obj2.name)
console.log(obj3.name)