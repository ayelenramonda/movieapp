import React from "react";
import { useState, useContext } from "react";
import '../NavBar/navBar.css'
import { useParams } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";




const API_IMG ="https://image.tmdb.org/t/p/w500/"
export const ItemDetail = ({title, id, poster_path, overview, release_date, homepage, vote_count, movies, original_title}) =>{
    const { movieId } = useParams()
    
    console.log(movieId)

    const [finalizar, setFinalizar] = useState(false)
    const { addMovie } = useContext(cartContext);

    const onAdd = (stock) =>{
        let item = {id: id, name: title, stock: stock, description: overview, price: vote_count};
        addMovie( item );
        //addMovie({...movies, qty: stock})
        setFinalizar(true)
        console.log(item)
        
          
    }


    return(
        <div className="cardDetail">
            <img  className="imgDetails" src={API_IMG+poster_path} alt="poster"></img>
            <div className="details">           
            <h3>{title}</h3>
            <span className="date">{release_date}</span>
            <p>{overview}</p>
            <p><strong>{homepage}</strong></p>
            {finalizar ? <Link to="/Cart"> <button className="btnAgregar">COMPRAR</button></Link> 
                        : <ItemCount stockTotal={10}  onAdd={onAdd} />
           }
            <div className="duplicados">Este producto ya esta agregado</div>

            
            </div>
            
            
         </div>
        

    )
}
export default ItemDetail
