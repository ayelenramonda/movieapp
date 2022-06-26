import React from "react";
import '../NavBar/navBar.css'
import '../ItemCount/ItemCount'
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer = ({lista, mostrar}) =>{

    const onAdd = (mensaje) =>{
        
        document.getElementById("detalleCarrito").innerHTML= mensaje  
        document.querySelector("#detalleCarrito").style.display="block"   
    }
    

    return(
        <section>
            <h1>{lista}</h1>
            <button className="btn" onClick={mostrar}>mostrar</button>  

            <ItemCount stockTotal={10}  onAdd={onAdd}></ItemCount>
            
            

        </section>
    )
}

export default ItemListContainer