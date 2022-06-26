import React from "react";
import { useState } from "react";
import '../NavBar/navBar.css'

const ItemCount = ({stockTotal, initial = 0, onAdd}) =>{

    const [ stock, setStock ] = useState(initial)

    const agregar = () =>{
        if(stock < stockTotal){
            setStock(stock + 1)
            document.querySelector(".btnCarrito").style.display="block"
            document.querySelector("#detalleCarrito").style.display="block"
            }
        if(stock >= stockTotal){
            alert("Llegaste al límite")
        }
    }
    
    const quitar = () =>{
        if(stock <= stockTotal){
        setStock(stock-1)
        } 
        if (stock <= 1){
            setStock(initial)
            alert("No hay nada en el carrito")
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
       
        <div id="detalleCarrito"></div>
        </>

   

)

}

export default ItemCount