import React from "react";
import { Link } from "react-router-dom";
import '../NavBar/navBar.css'





const API_IMG ="https://image.tmdb.org/t/p/w500/"
const List = ({movie, selectMovie}) => {
    
   

    return(
        
        <div className="cards" >
          
           <img onClick={() => selectMovie(movie)} className="imgCards" src={API_IMG+movie.poster_path} alt="poster"></img>      
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p> 
                
           
            
           <Link to={"/movie/" + movie.id}>            
            <button className="agregar">Ver más</button>
            </Link>  
            
            
            
         </div>
        

    )
}


export default List

