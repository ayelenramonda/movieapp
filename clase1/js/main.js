class Prestamo {
	constructor (nombre, taza, cuotas, limite){
	this.nombre = nombre
	this.taza = taza
	this.cuotas = cuotas
	this.limite = limite
	}

	mostrarnombre(nombrenuevo) {
		this.nombre = nombrenuevo  
        alert("El titular ha sido actualizado");          
	}

	mostrarCuota(limiteCuota){
		this.cuotas < limiteCuota	
        let intentosFallidos = 1;
        let correcto = false;
                 
        while(intentosFallidos<3 && !correcto){
          if(limiteCuota > 80){
            correcto = true;
          // sino el numero de intentos fallidos se aumenta y se vuleve a preguntar por otra
          } else {
            intentosFallidos++;
            limiteCuota = parseInt(prompt("La cantidad de cuotas debe ser mayor a la actual"));
          }
        }
        // A este punto solo se llega si bien se ha realizado correctamente el login
        // o bien se ha superado el numero de intentos, por lo tanto:
        if(correcto){
            this.cuotas = limiteCuota
            alert("Las cuotas han sido actualizadas");
        }else {
          alert("Ha superado el máximo de intentos");
        }
		
	}
}
const prestamo1 = new Prestamo("Mario Gomez", 0, 80, 1200000)
const prestamo2 = new Prestamo("Clara del Mar", 2, 120, 2000000)
const prestamo3 = new Prestamo("Carlos Gomez", 5, 120, 4000000)
const prestamo4 = new Prestamo("Mariano Ayala", 5, 120, 8000000)
const prestamo5 = new Prestamo("Carla Rodriguez", 5, 120, 12000000)

//CAMBIAR NOMBRE

let consulta = prompt("¿Querés cambiar el titular del prestamo? ingresá si, para cambiar, no para continuar")
let pregunta = consulta ? consulta.toLowerCase()  : null ;

if(pregunta == "si") {
	prestamo1.mostrarnombre(prompt("Ingrese un nuevo nombre"))
} else if(pregunta == "no") {
	alert("El titular no se cambió")
	} else if(pregunta !== "si" && pregunta !== "no"){
        alert("Los datos ingresados no son correctos")
    }

    
//CAMBIAR CUOTAS

let consultacuota = prompt("Querés cambiar las cuotas? si, para continuar, no para cancelar.")
let preguntacuota = consultacuota ? consultacuota.toLowerCase()  : null ;
	if(preguntacuota == "si"){
	prestamo1.mostrarCuota(parseInt(prompt("Introduzca la cantidad de cuotas que desea")));
} else if(preguntacuota == "no"){
	alert("muchas gracias")
}else if(preguntacuota !== "si" && preguntacuota !== "no"){
    alert("Los datos ingresados no son correctos")
}

console.log(prestamo1.nombre)
console.log(prestamo1.cuotas)

let prestamos = [prestamo1, prestamo2, prestamo3, prestamo4, prestamo5]


//FILTRAR LOS LIMITES VIGENTES MAYORES AL BUSCADO

let buscarlimite = parseInt(prompt("Ingrese el limite a buscar"))
  console.log (prestamos.filter(prestamo => prestamo.limite >= buscarlimite))

//FAUMENTAR TODOS LOS LIMITES

let aumentar = parseInt(prompt("ingrese el valor a aumentar los limites"))
const limites = prestamos.map((nl) => nl.limite)

const nuevolimite = prestamos.map((nl) => {
  return {
      nombre: nl.nombre,
      limite: nl.limite * aumentar
  }
})

console.log(nuevolimite)