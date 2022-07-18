import React from "react";
import '../NavBar/navBar.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";


const Cart = () =>{
    const { movies, deleteMovie, clear } = useContext(cartContext)
    
    const removeFromCart = (e) => {
        deleteMovie( e.target.value );
      }
  

   
    return(
        <>
        {movies.length === 0
         ? <Link to="/" ><h3>No hay nada todavia, hacé click y elegí una peli</h3></Link>
         : <>{movies.map(movie => <div key={movie.id} className="card">
            <div>
            <h3>{movie.name}</h3>
            <p>Cantidad seleccionada:<strong> {movie.stock}</strong></p>
            <button className="btnEliminar" value={movie.id} onClick={removeFromCart}>Eliminar</button>
            </div>
         </div>)}</>
         
            
    }
    <div><button  className="btnVaciar" onClick={clear}>Vaciar carrito</button></div>
        </>
    )
}

export default Cart