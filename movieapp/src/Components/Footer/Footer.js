import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import '../NavBar/navBar.css'




const Footer = () =>{
    const { user } = useContext(cartContext)

    

    
    
    return(
        
            <div className="footer">
                <Link to="/"><div className="logo" /></Link>
                {!user ? null : <p>Hola {user.displayName || user.email}, ¿Te gustó nuestra app? ¡Seguinos! ;) </p>}
               
            </div>
      
       
    )
}
export default Footer