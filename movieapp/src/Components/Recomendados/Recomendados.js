import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/navBar.css'
import Loading from "../Loading/Loading"
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/firebase"
import { getDoc, collection, doc} from "firebase/firestore";

export function Recomendados({title, id, backdrop_path, overview, release_date, category, price, genero}) {

    return(
        <h1>{title}</h1>
    )
}

export default Recomendados