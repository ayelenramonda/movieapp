import React from "react";
import '../NavBar/navBar.css'
import Item from "../Cards/Item"



const ItemList = ({movies, selectMovie}) =>{
    

    
    return(
            
            
            
            <div className="cardsContain">
                
            {movies.map(movie => (<Item key={movie.id} movie={movie} selectMovie={selectMovie} ></Item>))}
                
            </div>
            
    )
}

export default ItemList