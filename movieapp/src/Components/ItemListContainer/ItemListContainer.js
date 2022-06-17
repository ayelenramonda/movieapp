import React from "react";
import '../NavBar/navBar.css'



const ItemListContainer = ({lista, mostrar}) =>{
    return(
        <section>
            <h1>{lista}</h1>
            <button className="btn" onClick={mostrar}>mostrar</button>            
        </section>
    )
}

export default ItemListContainer