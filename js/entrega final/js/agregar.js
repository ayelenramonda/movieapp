let form = document.querySelector("#prestamoNuevo")
let todosPrestamos = document.querySelector("#todosPrestamos")
let infoPrestamo = document.querySelector("#infoPrestamo")
let infoBorrar = document.querySelector("#infoBorrar")
let prestamosActuales = document.querySelector("#prestamosActuales")
let completarCampos = document.querySelector("#completarCampos")
let capitalActualizadoUSD = 158416
let capitalActualizado = 20000000


 
let prestamos = []



form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#nya").value
    let taza = document.querySelector("#taza").value
    let cuota = document.querySelector("#cuota").value
    let moneda = document.querySelector("#moneda").value
    let limite = document.querySelector("#limite").value
    let limiteUSD = document.querySelector("#limiteUSD").value
    let tipodeprestamo = document.querySelector("#tipo").value
    

    let entrar = false
    if(nombre <= 4 || nombre === '' || !isNaN(nombre)){       
        document.querySelector("#Inombre").style.color = "#FF00A4" 
        entrar = true
    }
    if(taza === '' || taza > 99 ){              
        document.querySelector("#Itaza").style.color = "#FF00A4" 
        entrar = true
    }
    

    if(cuota === '' || cuota <= 0){       
        document.querySelector("#Icuota").style.color = "#FF00A4" 
        entrar = true
    } 
    
  
    if (entrar){
        document.querySelector("#completarCampos").style.display = "block"
        completarCampos.innerHTML = "Tenés q completar todos los campos"
        
    } else {       
        document.querySelector("#completarCampos").style.display = "none"
        document.querySelector("#Inombre").style.color = "#000000"
        document.querySelector("#Itaza").style.color = "#000000" 
        document.querySelector("#Icuota").style.color = "#000000" 
        document.querySelector("#Ilimite").style.color = "#000000"            
        

    
    Swal.fire({
        title: 'Revisá los datos',
        html: `<p style="font-size:14px">Nombre: <b>${nombre}</b> Taza: <b>${taza}%</b> Cuotas: <b>${cuota}</b> Límite: <b>${limite}</b> Límite USD: <b>${limiteUSD}</b> Tipo: <b>${tipodeprestamo}</b></p>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#54728C',
        cancelButtonColor: '#8A548C',
        cancelButtonText: 'Corregir',
        confirmButtonText: 'Guardar'
      }).then((result) => {
        if (result.isConfirmed) {
            prestamos.push(new Prestamo(nombre, taza, cuota, limite, tipodeprestamo, moneda))
            localStorage.setItem("prestamos", JSON.stringify(prestamos))
            calcular()  
            form.reset()
            document.querySelector("#divSweet").style.display = "none"
            mostrarI()
           
            
          Swal.fire({
            title: '¡Listo!',
            html: `<p style="font-size:18px;">Los datos fueron cargados</p>`, 
            icon: 'success'       
        })
        }
        
      })
        
    }     
           
})



setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial}) => {
        
        document.querySelector("#divSweet").innerHTML = `Estás cambiando la moneda, el valor oficial del dólar hoy es de: $${oficial}`            
         
    })
    .catch(error => console.error(error))


}, 5000) 

function cambiarInput(){ 
    let moneda = document.querySelector("#moneda")
    let eleccion = moneda.value    

        if(eleccion == "dolares"){
             document.querySelector("#divSweet").style.display = "block"
             document.querySelector('input[name="limites"]').style.display = "none"
             document.querySelector('input[name="limitesUSD"]').style.display = "block"     
               
        }else if(eleccion == "pesos"){
            document.querySelector("#divSweet").style.display = "none"
            document.querySelector('input[name="limitesUSD"]').style.display = "none"
            document.querySelector('input[name="limites"]').style.display = "block"
            
        }

}

fetch('json/dataPrestamos.json')
.then(response => response.json())
.then(dataPrestamos => {
    
  dataPrestamos.forEach((dataPrestamos) => {
        let {id, nombre, taza, cuotas, limite, tipodeprestamo, moneda} = dataPrestamos
        prestamosActuales.innerHTML += ` <div class="card border-secondary mb-4" style="max-width: 18rem; margin: 10px;">
        <div class="card-header" style="max-width: 18rem; background-color:#999999; color:white;">Prestamo<b> ${tipodeprestamo}</b><b style="color:#999999";>${id}</b></div>
        <div class="card-body">
          <p class="card-text">Nombre:<b> ${nombre}</b></p>
          <p class="card-text">Taza: ${taza}%</p>
          <p class="card-text">Cuotas: ${cuotas}</p>
          <p class="card-text">Moneda: ${moneda}</p>
          <p class="card-text">Limite: <b>${limite}</b></p>             
  
        </div>  
        
      
        </div>
        `
    })
})

document.querySelector("#capitalActualizado").innerHTML = `$${capitalActualizado}`
document.querySelector("#capitalActualizadoUSD").innerHTML = `$${capitalActualizadoUSD}` 
function calcular (){
    let moneda = document.querySelector("#moneda").value
    let limite = document.querySelector("#limite").value
    let limiteUSD = document.querySelector("#limiteUSD").value
    capitalActualizado = capitalActualizado - limite
    let restaUSD = capitalActualizadoUSD - limiteUSD

    
    if(moneda === "pesos"){        
           document.querySelector("#capitalActualizado").innerHTML =`$${capitalActualizado} `
           console.log(capitalActualizado)
    } else if(moneda === "dolares"){
        
        document.querySelector("#capitalActualizadoUSD").innerHTML =`$${restaUSD} `
        console.log(restaUSD)
    }

}

function calcularSuma (){
    let moneda = document.querySelector("#moneda").value
    let limite = document.querySelector("#limiteSumar").value
    let limiteUSD = document.querySelector("#limiteUSD").value
    capitalActualizado = capitalActualizado + limite
    let sumaUSD = capitalActualizadoUSD + limiteUSD

    
    if(moneda === "pesos"){        
           document.querySelector("#capitalActualizado").innerHTML =`$${capitalActualizado}`
           console.log(capitalActualizado + limite)
           console.log(limite)
    } else if(moneda === "dolares"){
        
        document.querySelector("#capitalActualizadoUSD").innerHTML =`$${sumaUSD} `
        console.log(sumaUSD)
    }

}






const mostrarI = () => {
  todosPrestamos.innerHTML = ''
  prestamos = JSON.parse(localStorage.getItem('prestamos'))
  if(prestamos === null){
    prestamos = []
  }else{
    prestamos.forEach(prestamos => {
      todosPrestamos.innerHTML +=`   
      <div class="card border-secondary mb-4" style="max-width: 18rem; margin: 10px;">
      <div class="card-header" style="background-color: white;">Prestamo<b> ${prestamos.tipodeprestamo}</b>
      <div class="iconoDelete">d</div>
      </div>
      <div class="card-body">
        <p class="card-text">Nombre:<b> ${prestamos.nombre}</b></p>
        <p class="card-text">Taza: ${prestamos.taza}%</p>
        <p class="card-text">Cuotas: ${prestamos.cuotas}</p>
        <p class="card-text">Moneda: ${prestamos.moneda}</p>
        <p class="card-text">Limite: <b id="limiteSumar">${prestamos.limite}</b></p>             

      </div>  
    
      </div>
      `
    });

  }
}


document.addEventListener("DOMContentLoaded", mostrarI)

todosPrestamos.addEventListener('click', (e) => {
    e.preventDefault()
    let ruta = e.path[2].childNodes[3].childNodes[1].childNodes[1].innerHTML
    if(e.target.innerHTML === "d"){
        Swal.fire({
            title: '¿Eliminar Prestamo?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#54728C',
            cancelButtonColor: '#8A548C',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {    
                calcularSuma(ruta)            
                eliminarLS(ruta)
                
             
            }
            
          })
        
        } 
    
})

const eliminarLS = (nombre) =>{
    console.log(nombre)
    
    
    prestamos.forEach((elemento, index) =>{
        if(elemento.nombre === nombre)        
            indexPrestamos = index           
            //console.log(index)
           
        })
            
            prestamos.splice(prestamos,1)
            localStorage.setItem("prestamos", JSON.stringify(prestamos))
            
            mostrarI()
            
           
}








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











