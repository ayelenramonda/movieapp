import React from "react";
import { useState } from "react";
import '../NavBar/navBar.css'
import { useParams } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'




const API_IMG ="https://image.tmdb.org/t/p/w500/"
export const ItemDetail = ({title, poster_path, overview, release_date, homepage, genres}) =>{
    const { movieId } = useParams()
    
    console.log(movieId)

    const [finalizar, setFinalizar] = useState(false)

    const onAdd = (stock) =>{
        setFinalizar(true)
        console.log("agregado", stock)  
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
            {!finalizar ? <ItemCount stockTotal={10}  onAdd={onAdd} /> : 
           <Link to="/Cart"> <button className="btnAgregar">COMPRAR</button></Link>}
          

            
            </div>
            
            
         </div>
        

    )
}
export default ItemDetail