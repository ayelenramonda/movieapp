let usuario = null;
let prestamos = [];

class Prestamo {
  constructor(nombre, taza, cuotas, limite, tipodeprestamo) {
    this.nombre = nombre;
    this.taza = taza;
    this.cuotas = cuotas;
    this.limite = limite;
    this.tipodeprestamo = tipodeprestamo;
  }
  /*preguntarCambiarNombre() {
    if (confirm("¿Querés cambiar el nombre y apellido del titular?")) {
      this.cambiarNombre();
    }
  }

  cambiarNombre() {
    let nuevoNombre = prompt("Ingresá el nuevo nombre y apellido");
    if (nuevoNombre !== "") {
      if (
        confirm(
          `Vas a cambiar tu nombre a ${nuevoNombre}\n¿Es correcto este nombre?`
        )
      ) {
        this.nombre = nuevoNombre;
        alert("El titular ha sido cambiado");
        return true;
      }
      this.cambiarNombre();
      return false;
    }
    alert("El nombre no es válido");
    this.cambiarNombre();
  }*/
}

document.getElementById("nuevoPrestamoButton")
document.addEventListener("click", iniciar);

function saveNumber(pregunta) {
  let valor = 0;

  valor = prompt(pregunta);
  if (!isNaN(valor - 0)) {
    return valor;
  }
  return 0;
}


function iniciar() {
  if (usuario) {
      if (nuevoPrestamo()) {
      alert("Se cargó el nuevo préstamo");
    } else {
      alert("La operación fue cancelada.\nNo se guardó el préstamo.");
    }
  } else {
    usuario = prompt("Bienvenido, ingrese su nombre");
    if (usuario === null) {
      alert("No se cargó el usuario");
    } else {
      iniciar();
    }
  }
}

function canceloOperacion(dato) {
  if (dato === null || dato === undefined) {
    alert("Cancelaste la operación.");
    return false;
  } else {
    return true;
  }
}

function saveNumberMoreThan(pregunta, mayorQue) {
  let n = saveNumber(pregunta);
  if (n === null) {
    return null;
  }
  if (n > mayorQue) {
    return n;
  } else {
    alert(`Tiene que ser mayor a ${mayorQue}`);
    return saveNumberMoreThan(pregunta, mayorQue);
  }
}

function guardarString(pregunta) {
  let s = prompt(pregunta);
  if (s === null) {
    return null;
  }
  if (s !== "") {
    return s;
  } else {
    alert(`Tenés que completar el campo`);
    return guardarString(pregunta);
  }
}

function nuevoPrestamo() {
  //Return true if todo ok
  //Return false if no cargó el nuevo préstamo
  let nuevaPersona = guardarString(`Hola, ${usuario}, ingresá el nombre de la nueva persona`);
  if (!canceloOperacion(nuevaPersona)) {
    return false;
  }

  let nuevaTaza = saveNumber(`Ahora ingresá la taza de ineterés`);
  if (!canceloOperacion(nuevaTaza)) {
    return false;
  }

  let nuevaCuota = saveNumberMoreThan(`¿Cuántas cuotas va a tener?`, 80);
  if (!canceloOperacion(nuevaCuota)) {
    return false;
  }

  let nuevoLimite = saveNumberMoreThan(`¿Cuál es el límite adquirido?`, 1200000);
  if (!canceloOperacion(nuevoLimite)) {
    return false;
  }

  let nuevoTipo = guardarString(`Tipo de prestamo`);
  if (!canceloOperacion(nuevoTipo)) {
    return false;
  }

  let confirma = confirm(
    `¿Son correctos estos datos?\nPersona: ${nuevaPersona};\nTaza: ${nuevaTaza};\nCuota: ${nuevaCuota};\nLimite: ${nuevoLimite};\nTipo: ${nuevoTipo}`
  );
  if (confirma) {
    //Guardar el préstamo
    prestamos.push(
      new Prestamo(nuevaPersona, nuevaTaza, nuevaCuota, nuevoLimite, nuevoTipo)
    );
    console.log(prestamos);
    return true;
  } else {
    nuevoPrestamo();
  }
}

