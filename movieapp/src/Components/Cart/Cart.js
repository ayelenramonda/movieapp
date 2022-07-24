import React, { useState }from "react";
import '../NavBar/navBar.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";
import swal from 'sweetalert';
import { db } from "../../firebase/firebase"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";


const Cart = () =>{
    const { movies, deleteMovie, clear } = useContext(cartContext)

    



    
    const removeFromCart = (e) => {
        
       swal({
            title: "¿Seguro que queres borrar esta peli?",
            text: "Igual tranqui, si te arrepentis la podés buscar de nuevo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            console.log("acadeberiaborrar")
            if (willDelete) {
              swal("Lisssto", {
                icon: "success",
              });
            deleteMovie(e.target.value); 
            
              
            } else {
              swal({title:"¡Llevate todo!"});
              
            }
          });
        
    }
  
      let total = 0;
      
      
      
    return(
        <>
        {movies.length === 0
         ? <Link to="/" ><h3>No hay nada todavia, hacé click y elegí una peli</h3></Link>
         : <>{movies.map(movie => {

            total = total + movie.price;
            return(
            <div key={movie.id} className="card">
            <div>
            <h3>{movie.name}</h3>
            <p>Cantidad seleccionada:<strong> {movie.qty}</strong></p>
            <p>{movie.description}</p>
            <h5>Precio ${movie.price}</h5>
            <button className="btnEliminar" value={movie.id} onClick={removeFromCart} >Eliminar</button>
  
            
            </div>
         </div>)})}</>
         
            
    }
         
         
         

   

        {movies.length !== 0 
        ? <button  className="btnFinalizar">Finalizar compra</button>
        : null}
        
        
        {movies.length !== 0 
        ? <p><strong>COSTO TOTAL: </strong>${total}</p>
        : null}
        
        {movies.length !== 0 
        ? <div><button  className="btnVaciar" onClick={clear}>Vaciar carrito</button></div>
        : null}



              

        
        </>
    )
}

export default Cart