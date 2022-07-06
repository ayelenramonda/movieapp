import React from 'react';
import '../NavBar/navBar.css'


const API_IMG ="https://image.tmdb.org/t/p/w500/"
const List = ({title, poster_path, overview, original_title, popularity, vote_average, release_date}) => {

    return(
        
        <div className="cards" >
            
            <img className="imgCards" src={API_IMG+poster_path} alt="poster"></img>              
            <h3>{title}</h3>
            <p>{release_date}</p>
            
                            
            <button className="agregar">agregar</button>
         </div>
        

    )
}


export default List

