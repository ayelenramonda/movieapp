import React from "react"
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'


const NavBar = () =>{
    return(
        <nav>
            <div className="logo" />
        <li>
            <ul><a href="https://www.google.com">Peliculas</a></ul>
            <ul><a href="https://www.google.com">Series</a></ul>
            <ul><a href="https://www.google.com">infantil</a></ul>
            <ul><a href="https://www.google.com">Novedades</a></ul>
        </li>
        <CartWidget />
        </nav>

    )
}

export default NavBar