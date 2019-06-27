function calcular(a, b, operacion) {
    let msg = `El resultado de un/a ${operacion} con ${a} y ${b} es`
    return msg + callback(a,b)
}

function producto (a,b) {return a*b}

console.log(calcular(4,6,'pepe', function(x,y) {return x + y}))
console.log(calcular(4,6,'juan', function(x,y) {return x - y}))
console.log(calcular(4,6,'producto', function(x,y) {return x + y}))