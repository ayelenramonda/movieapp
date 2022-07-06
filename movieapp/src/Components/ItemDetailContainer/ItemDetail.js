import React from "react";
import '../NavBar/navBar.css'

const API_IMG ="https://image.tmdb.org/t/p/w500/"
const ItemDetail = ({movie}) =>{
    return(
        <div className="cardDetail" >
            
            <img className="imgCards" src={API_IMG+movie.poster_path} alt="poster"></img>            
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            
                            
            <button className="agregar">agregar</button>
         </div>

    )
}
export default ItemDetail
