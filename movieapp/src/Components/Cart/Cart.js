import React from "react";
import '../NavBar/navBar.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";


const Cart = () =>{
    const { movies } = useContext(cartContext)
    return(
        <>
        {movies.map(movie => <div key={movie.id}>
            <h3>{movies.title}</h3>
         
         
         
         </div>)}
        
        {/*movies.length === 0
         ? <Link to="/">hacé click acá para volover a la home</Link>
         : <></>
            
    */}
        </>
    )
}

export default Cart