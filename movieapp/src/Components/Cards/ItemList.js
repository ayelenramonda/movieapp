import React from "react";
import '../NavBar/navBar.css'
import Item from "../Cards/Item"



const ItemList = ({movies}) =>{

    
    return(
        
            <div className="cardsContain">
                
            {movies.map(movie => (<Item key={movie.id} movie={movie}></Item>))}
                
            </div>
    )
}

export default ItemList