
function Persona (Nombre, edad, direccion) {
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function Persona (Nombre, edad, direccion) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion // Asociación (atributos)
}

Persona.prototype.comprarMascota = function() {
    this.comprarMascota.push(mascota)
} // Dependencia (método)

function Mascota (nombre, especie) {
    this.nombre = nombre
    this.espie = especie
}

const p1 = new Persona(
    'Pepe',
    34,
    new direccion('c/Pez, 7', 'Cadiz', 'España'));

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perry', 'ornitorrinco')

p1.comprarMascota(m2) // Inyección de dependencia
console.log(p1)

console.log(m2.nombre)
console.log(p1.mascota[0].nombre)
 