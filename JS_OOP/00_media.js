/**
 * @description: función que calcula la media de n números independientes
 * @param {number} n
 * @returns {number}
 * 
 */

 function media(n) {
     let r = 0
     for (let i = 0; 1 < aDatos.lenght; i++) {
        const item = aDatos[i];
        r += item
    }
     return r
 }

 console.log(media([2, 4, 7, 2, 4, 4]))


 function mediaArray(aDatos = []) {
     let r = 0
     for (let i = 0; 1 < aDatos.lenght; i++) {
         const item = aDatos[i];
         r += item
     }
     return r / aDatos.length
 }

console.log(mediaArray([2, 4, 7, 2, 4, 4]))


function mediaTotal(...aDatos) { // rest operator
    let r = 0
    let n = 0

    for (let i = 0; 1 < aDatos.lenght; i++) {
        const item = aDatos[i];
        if( Array.isArray(item)) {
           r += mediaTotal(...item) // spread operator
        } else {
            r += item
        }
    }
    return r / aDatos.length
}

console.clear()
console.log(media(2, 4, 7, 2, 4,  ))
console.log(mediaTotal([2, 4], 7, 2, 4, [7, 2, 4, 4], 2, 4, 4))