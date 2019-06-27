function calcular(a, b, operacion) {
    let msg = `El resultado de una ${operacion} con ${a} y ${b} es`
    return msg + callback(a,b)
}

console.log(calcular(4,6,'pepe', function(x,y) {return x + y}))
console.log(calcular(4,6,'juan', function(x,y) {return x + y}))
console.log(calcular(4,6,'producto', function(x,y) {return x + y}))

