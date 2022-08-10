import React from "react";
import { useState, useContext } from "react";
import '../NavBar/navBar.css'
import { useParams } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";
import Recomendados from "../Recomendados/Recomendados";








const API_IMG ="https://image.tmdb.org/t/p/original"
export const ItemDetail = ({title, id, backdrop_path, overview, release_date, category, price,trailer}) =>{
    const { movieId } = useParams()    
    console.log(movieId)

  



    const [finalizar, setFinalizar] = useState(false)
    const { addMovie } = useContext(cartContext);

    const onAdd = (stock) =>{
        let item = {id: id, name: title, qty: stock, description: overview, price: price};
        addMovie( item );
        setFinalizar(true)
        
        
          
    }


    return(
        <>

        <div className="imgDetails" style={{backgroundImage: `url('${API_IMG}${backdrop_path}')`}}>
                <div className="details">
                <h1>{title}</h1>
                <span className="date">{release_date}</span>
                <h3>${price}</h3>
                <p>{overview}</p>

                               
                
        
        
            
            
            {finalizar ? <Link to="/Cart"> <button className="btnAgregar" id="comprar">COMPRAR</button></Link> 
                        : <ItemCount stockTotal={10}  onAdd={onAdd} />
           }
           </div>
            <div className="duplicados">Este producto ya esta agregado</div>

            
            </div>
            <h2>Nuevas incorporaciones</h2>
            <Recomendados></Recomendados>
            
         
            
            
            </>
            
            
         
        

    )
}
export default ItemDetail
