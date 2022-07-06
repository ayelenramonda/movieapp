import React from "react";
import '../NavBar/navBar.css'
import Item from "../Cards/Item"


const ItemList = ({movies}) =>{

    
    return(
        
            <div className="cardsContain">
            {movies.map(movi => (<Item key={movi.id}{...movi}></Item>))}
            </div>
    )
}

export default ItemList