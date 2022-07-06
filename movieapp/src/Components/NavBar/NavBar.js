import React from "react"
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'
import { Link, NavLink } from "react-router-dom"


const NavBar = () =>{

    const categories =  [
        {name: "Peliculas", id: 0, route: "/category/movie"},
        {name: "TV", id: 0, route: "/category/tv"},
        {name: "Trendings", id: 0, route: "/category/person"},
        
    ]
    return(
       
        
        <nav>   
        <Link to="/"><div className="logo" /></Link>         
        <ul>
            <li>{categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}</li>
            
        </ul>
        <Link to="/cart"><CartWidget /></Link>
        
        </nav>
       
       

    )
}

export default NavBar