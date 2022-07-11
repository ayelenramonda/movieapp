import React from "react";
import '../NavBar/navBar.css'
import { useParams } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";




const API_IMG ="https://image.tmdb.org/t/p/w500/"
export const ItemDetail = ({title, poster_path, overview, release_date, homepage, genres}) =>{
    const { movieId } = useParams()
    
    console.log(movieId)

    const onAdd = (mensaje) =>{        
        document.getElementById("detalleCarrito").innerHTML= mensaje  
        document.querySelector("#detalleCarrito").style.display="block"   
    }


    return(
        <div className="cardDetail">
            

            
            <img  className="imgDetails" src={API_IMG+poster_path} alt="poster"></img>
            <div className="details">           
            <h3>{title}</h3>
            <span className="date">{release_date}</span>
            <p>{overview}</p>
            <p><strong>{homepage}</strong></p>
          

            <ItemCount stockTotal={10}  onAdd={onAdd}></ItemCount>
            </div>
            
            
         </div>
        

    )
}
export default ItemDetail
