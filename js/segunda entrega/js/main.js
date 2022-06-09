let form = document.querySelector("#prestamoNuevo")
let todosPrestamos = document.querySelector("#todosPrestamos")
let infoPrestamo = document.querySelector("#infoPrestamo")
let infoBorrar = document.querySelector("#infoBorrar")
let prestamosActuales = document.querySelector("#prestamosActuales")
 
let prestamos = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#nya").value
    let taza = document.querySelector("#taza").value
    let cuota = document.querySelector("#cuota").value
    let limite = document.querySelector("#limite").value
    let tipodeprestamo = document.querySelector("#tipo").value
    prestamos.push(new Prestamo(nombre, taza, cuota, limite, tipodeprestamo))
    localStorage.setItem("prestamos", JSON.stringify(prestamos))
    form.reset()
    mostrarI()
   
})

const mostrarI = () => {
  todosPrestamos.innerHTML = ''
  prestamos = JSON.parse(localStorage.getItem('prestamos'))
  if(prestamos === null){
    prestamos = []
  }else{
    prestamos.forEach(prestamos => {
      todosPrestamos.innerHTML +=`   
      <div class="card border-secondary mb-4" style="max-width: 18rem; margin: 10px;">
      <div class="card-header" style="background-color: white;">Prestamo<b> ${prestamos.tipodeprestamo}</b></div>
      <div class="card-body">
        <p class="card-text">Nombre:<b> ${prestamos.nombre}</b></p>
        <p class="card-text">Taza: ${prestamos.taza}%</p>
        <p class="card-text">Cuotas: ${prestamos.cuotas}</p>
        <p class="card-text">Limite: ${prestamos.limite}</p>             

      </div>  
    
      </div>
      `
    });

  }
}

document.addEventListener("DOMContentLoaded", mostrarI)



fetch('json/dataPrestamos.json')
.then(response => response.json())
.then(dataPrestamos => {
    
  dataPrestamos.forEach((dataPrestamos) => {
        let {nombre, taza, cuotas, limite, tipodeprestamo} = dataPrestamos
        prestamosActuales.innerHTML += ` <div class="card border-secondary mb-4" style="max-width: 18rem; margin: 10px;">
        <div class="card-header" style="max-width: 18rem; background-color:#5A546D; color:white;">Prestamo<b> ${tipodeprestamo}</b></div>
        <div class="card-body">
          <p class="card-text">Nombre:<b> ${nombre}</b></p>
          <p class="card-text">Taza: ${taza}%</p>
          <p class="card-text">Cuotas: ${cuotas}</p>
          <p class="card-text">Limite: ${limite}</p>             
  
        </div>  
      
        </div>
        `
    })
})



infoPrestamo.addEventListener('click', () => {   
Toastify({
  text: "Prestamo ingresado exitosamente",
  duration: 2000,      
  gravity: "top", 
  position: "center",     
   style: {
    background: "#00AAFF",
  },
  onClick: function(){}
  }).showToast();
})

infoBorrar.addEventListener('click', () => {   
Toastify({
 text: "Se borraron los datos",
 gravity: "top", 
 position: "center",
 offset: {
   x: 50,
   y: 10 
 },
 style: {
   background: "#C97171",
 },
}).showToast();
})




