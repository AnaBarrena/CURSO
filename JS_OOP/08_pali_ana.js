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