import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import '../NavBar/navBar.css'






const Footer = () =>{
    const { user, logout } = useContext(cartContext)

    

    
    
    return(
        
            <div className="footer">
                <Link to="/"><div className="logo" /></Link>
                {!user ? null : <><p>Hola {user.displayName || user.email}, ¿Te gustó nuestra app? ¡Seguinos! ;) </p>
                <Link to="#"><div className="fb" /></Link>
                <Link to="#"> <div className="ig" /></Link>
                <Link to="#"><div className="tw" /></Link>
                <div className="salir" onClick={logout}></div>
                
                </>}
               
            </div>
      
       
    )
}
export default Footer