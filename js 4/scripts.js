const precio = parseFloat(prompt("Ingrese el precio para conocer el interés"))
const interes = 1.10
const cuota = parseFloat(prompt("Ingrese la cantidad de cuotas: 3, 6 o 9"))

function calcularInteres(producto){
	return ((precio * interes)/cuota).toFixed(1)
}

if(cuota === 3){
	alert(("Elegiste 3 cuotas, el valor de cada una es: ") + (calcularInteres(precio)))
} else if(cuota === 6){
	alert(("Elegiste 6 cuotas, el valor de cada una es: ") + (calcularInteres(precio) * 1.10))
} else if(cuota === 9){
	alert(("Elegiste 9 cuotas, el valor de cada una es: ") + (calcularInteres(precio) * 1.20))
} else {
	alert("gracias por utilizar nuestros servicios")
}