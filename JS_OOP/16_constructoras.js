
// Objeto JSON o literal

const p1 = {
    nombre: 'Pepe',
    edad: 23,
    altura: 178,
    pais: 'España'
}

function Persona(nombre, edad, altura, pais) {
    this.cerebro = true
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
    this.pais = pais
    this.saludar = function () {
        let msg = `Hola, soy ${this.nombre}`
    }
     
}

const p2 = new Persona('Pepe', 23, 180, 'Bulgaria')
const p3  = new Persona('Pepa', 27, 179, 'Italia')
/* delete p2.cerebro
p2.ia = true */

p2.serContratado('medico')
p3.serContratado('CEO')
p2.cerebro = false

console.log(p1)
console.log(p2)
console.log(p3)

p2.saludar(p3.nombre)
p3.saludar(p2.nombre)

for (const key in p3) {
    if (!p3.hasOwnProperty(key)) {
        const element = p3[key]
    }
}