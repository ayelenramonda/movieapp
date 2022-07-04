import React from 'react';
import '../NavBar/navBar.css'


const List = ({ movie }) => {

    return(
        
        <div className="cards" >
            
            <img className="imgCards" src={movie.Poster} alt="poster"></img>              
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            
                            
            <button className="agregar">agregar</button>
         </div>
        

    )
}


export default List

