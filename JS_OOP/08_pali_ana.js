
/** function isPali
 * @description: comprobar si en string es palindromo
 * @param {string} cadena
 * @returns {boolean}
 */

const isPali = (cadena ='') => {
	 let r = true
	 const cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
	 //const cadenaSinEspacios = cadena.replace(/ /,'').toLowerCase()
	 console.log(cadenaSinEspacios)
	 const cadenaInversa = cadenaSinEspacios.split('').reserve().join('')
	 console.log(cadenaInversa)
	 if (cadenaSinEspacios === cadenaInversa) {
		 r = true
	 }
	 return r
 }


const isPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === 
        sinEspacios.split('').reverse().join('') ? true : false 
}

module.exports = {}
module.exports.isPali = isPali
module.exports.isPaliShort = isPaliShort



//////////////////////////////////// EJERCICIO PRÁCTICO

/*
{
const palabra = ["Atar a la rata"]

function texto()
{
    var palabra=prompt("Atar a la rata").toLowerCase();

    var nuevoArray = palabra.split("");
    var alReves = palabra.split("").reverse();
 
	for (var i=0;i<palabra.length;i++){
        const item = palabra[i]
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 
if(texto())
{
	alert("Esto es palíndromo");
}else{
	alert("Esto no es palíndromo")
}
}

console.log(palabra.replace)
*/