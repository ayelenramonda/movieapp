import React from "react"
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'
import { Link, NavLink } from "react-router-dom"
import UserIcon from "../UserIcon/UserIcon"
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";


const NavBar = () =>{

    const { user } = useContext(cartContext);

    const categories =  [
        {name: "Populares", id: 0, route: "/category/popular"},
        {name: "Más votadas", id: 1, route: "/category/top_rated"},
        {name: "Lo que se viene", id: 2, route: "/category/upcoming"},
        
    ]
   
    return(
       
        
        <nav>   
        <Link to="/"><div className="logo" /></Link>         
        <ul>
            <li>{categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}</li>
            
        </ul>
        <Link className="cartNumber" to="/cart"><CartWidget /></Link>
        {user ? null :  <Link className="" to="/login"><UserIcon /></Link> }
        
        </nav>
       
       

    )
}

export default NavBar