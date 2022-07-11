import React from "react";
import { useState } from "react";
import '../NavBar/navBar.css'
const ItemCount = ({stockTotal, initial = 0, onAdd}) =>{

    const [ stock, setStock ] = useState(initial)

    const agregar = () =>{
        if(stock < stockTotal){
            setStock(stock + 1)
            document.querySelector("#carritoVacio").style.display="none"
            document.querySelector(".btnCarrito").style.display="block"
            
            }
        if(stock >= stockTotal){
            document.querySelector("#carritoLleno").style.display="block"
        }
    }
    
    const quitar = () =>{
        if(stock <= stockTotal){
        setStock(stock - 1)
        document.querySelector("#carritoLleno").style.display="none"

        } 
        if (stock <= 1){
            setStock(initial)
            //alert("No hay nada en el carrito")
            document.querySelector("#carritoVacio").style.display="block"
            document.querySelector(".btnCarrito").style.display="none"
            document.querySelector("#detalleCarrito").style.display="none"
            
           
        }
        
    }

return(
        <>
        <div className="contentCount">
            <button className="btnCantidad" onClick={quitar}>-</button>
            <p>{stock}</p>
            <button className="btnCantidad" onClick={agregar}>+</button>
        </div>
        
        <button className="btnCarrito" onClick={() => {onAdd(`Cantidad seleccionada de productos: ${stock}`)}}>comprar</button>
        <div id="carritoVacio">No hay nada en el carrito</div>
        <div id="carritoLleno">No hay más stock</div>
        <div id="detalleCarrito"></div>
        </>

   

)

}

export default ItemCount