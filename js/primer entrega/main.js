class Prestamo {
	constructor(nombre, taza, cuotas, limite, tipodeprestamo) {
		this.nombre = nombre
		this.taza = taza
		this.cuotas = cuotas
		this.limite = limite
		this.tipodeprestamo = tipodeprestamo
	}

	preguntarCambiarCuotas() {
		if (confirm("¿Querés cambiar las cuotas?")) {
			this.cambiarCuota()
		}
	}

	cambiarCuota() {
		let nuevasCuotas = parseInt(prompt("Ingresá la cantidad de cuotas que deseas"))
		if (nuevasCuotas > 120) {
			if (confirm(`Vas a cambiar las cuotas a ${nuevasCuotas}`)) {
				this.cuotas = nuevasCuotas
				alert("Las nuevas cuotas fueron actualizadas")
				return true;
			} else if (nuevasCuotas < 120) {
				this.cambiarCuota()
				return false
			}
		}
		alert("La cantidad de cuotas no puede ser menor al actual")
		this.cambiarCuota()
	}


	preguntarCambiarNombre() {
		if (confirm("¿Querés cambiar el nombre y apellido del titular?")) {
			this.cambiarNombre()
		}
	}

	cambiarNombre() {
		let nuevoNombre = prompt("Ingresá el nuevo nombre y apellido").toUpperCase()
		if (nuevoNombre !== "") {
			if (confirm(`Vas a cambiar tu nombre a ${nuevoNombre}\n¿Es correcto este nombre?`)) {
				this.nombre = nuevoNombre
				alert("El titular ha sido cambiado")
				return true;
			}
			this.cambiarNombre()
			return false
		}
		alert("El nombre no es válido")
		this.cambiarNombre()
	}
	
	
}
let nuevaPersona = prompt(`Hola ${usuario} ingresá el nombre de la nueva persona`).toUpperCase()
let nuevaTaza = parseInt(prompt(`Ahora ingresá que la taza de ineterés`))
let nuevaCuota = parseInt(prompt(`¿Cuántas cuotas va a tener`))
let nuevoLimite = parseInt(prompt(`¿Cuál es el límite adquirido?`))
let nuevoTipo = prompt(`Tipo de prestamo`).toUpperCase()
function agregarPersona (nuevaPersona, nuevaTaza, nuevaCuota, nuevoLimite, nuevoTipo) {		
	
	if (nuevaPersona !== "" && nuevaTaza !== "" && nuevaCuota !== "" && nuevoLimite !== "" && nuevoTipo !=="")  {
		if (confirm(`Los datos ${nuevaPersona} ${nuevaTaza} ${nuevaCuota} ${nuevoLimite} ${nuevoTipo} ¿son correctos?`)) {
			prestamos.push(new Prestamo(nuevaPersona, nuevaTaza, nuevaCuota, nuevoLimite, nuevoTipo))
			alert("Se agregó la nueva persona")
			return true;
		}
		this.agregarPersona()
		return false
	}
	alert("La persona nueva no se agregó")
	this.agregarPersona()
	//prestamos.push(new Prestamo(nuevaPersona, nuevaTaza, nuevaCuota, nuevoLimite, nuevoTipo))




//AGREGAR USUARIOS

let prestamos = []





/*/AVERIGUAR CUANTO VOY A PAGAR POR CUOTA

const precio = parseFloat(prompt("Ingrese el precio para conocer el valor de tu cuota"))
const interes = 1.10
const cuota = parseFloat(prompt("Ingrese las cuotas de tu prestamo"))

function cuantoEsMiCuota(precio) {
	return ((precio * interes) / cuota).toFixed(1)
}

alert(`Tu prestamo de $${precio} en ${cuota} cuotas,\n es de: $${cuantoEsMiCuota(precio)} por cuota`)


//CAMBIAR NOMBRE

prestamos[0].preguntarCambiarNombre()
console.log(prestamos[0].nombre)

//CAMBIAR CUOTAS

prestamos[0].preguntarCambiarCuota()
console.log(prestamos[0].cuotas)


//BUSCAR TITULAR Y DETALLES

let buscarNombre = (prompt("Ingresá tu nombre para saber los detalles de tu prestamo").toUpperCase())
console.log(prestamos.find(prestamo => prestamo.nombre == buscarNombre))


//AUMENTAR TODOS LOS LIMITES

let aumentar = parseInt(prompt("ingrese el valor a aumentar los limites"))
const limites = prestamos.map((nl) => nl.limite)

const nuevolimite = prestamos.map((nl) => {
	return {
		nombre: nl.nombre,
		limite: nl.limite * aumentar
	}
})

console.log(nuevolimite)*/