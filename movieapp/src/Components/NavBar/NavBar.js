import React from "react"
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () =>{
    return(
        <nav>
            <div className="logo" />
        <li>
            <ul><a href="#">Peliculas</a></ul>
            <ul><a href="#">Series</a></ul>
            <ul><a href="#">infantil</a></ul>
            <ul><a href="#">Novedades</a></ul>
        </li>
        <CartWidget />
        </nav>

    )
}

export default NavBar