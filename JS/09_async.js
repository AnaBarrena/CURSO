/** Asincronía
 * 
 * En otros lenguajes es multhilo - multithread
 * Dándose concurrencia real
 * 
 * En JavaScript hay un solo hilo
 * que gestiona el bucle de eventos
 */



 
setTimeout( () => {
    console.log('Pasaron dos segundos')
}, 2000)
console.log('Fin')