import React from "react"
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'
import { Link, NavLink } from "react-router-dom"


const NavBar = () =>{

    const categories =  [
        {name: "Populares", id: 0, route: "/category/popular"},
        {name: "Más votadas", id: 1, route: "/category/top_rated"},
        {name: "Lo que se viene", id: 2, route: "/category/upcoming"},
        
    ]
    console.log(categories.name)
    return(
       
        
        <nav>   
        <Link to="/"><div className="logo" /></Link>         
        <ul>
            <li>{categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}</li>
            
        </ul>
        <Link className="cartNumber" to="/cart"><CartWidget /></Link>
        
        </nav>
       
       

    )
}

export default NavBar