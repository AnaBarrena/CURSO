'use strict'

/** function comprobar()
 * @description: comprobar si la cadena tiene:
 * sólo mayúsculas (0)
 * sólo minúsculas (1)
 * mayúsculas y minúsculas (2)
 * @param (string) cadena
 * @returns (number)
 */

 function comprobarCaso(cadena = '') {
    let r = 0
    if (cadena == cadena.toUpperCase()) { // eres sólo mayúsculas
        r = 0
    } else if (cadena == cadena.toLowerCase()) { // eres sólo minúsculas
        r = 1
    }
    return r
 }
 
 function mostrarComprobacionCaso (cadena ='') {
     const msg = [
        'sólo mayúsculas',
        'sólo minúsculas',
        'mayúsculas y minúsculas'
     ]
    console.log(msg)
 }