import React from "react"
import { useContext } from 'react'
import carrito from '../../assets/carrito.svg'
import './CartWidget.css'
import { cartContext } from "../Context/CartContext"

const CartWidget = () =>{

    const { qtyMovies } = useContext(cartContext)
    
    return(
        
            <>
                <img src={carrito} alt="Carrito"/>
                {qtyMovies > 0 ? <p>{qtyMovies}</p> : null}
            </>
      
       
    )
}

export default CartWidget