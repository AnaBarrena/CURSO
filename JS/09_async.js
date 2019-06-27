/** Asincronía
 * 
 * En otros lenguajes es multhilo - multithread
 * Dándose concurrencia real
 * 
 * En JavaScript hay un solo hilo
 * que gestiona el bucle de eventos
 */

 
setTimeout( () => {
    console.log('Mensaje 1')
}, 2000)
console.log('Mensaje 2')
console.log("Mensaje 3")
setTimeout( () => {
    console.log('Mensaje 4')
}, 2000)
console.log('Mensaje 5')