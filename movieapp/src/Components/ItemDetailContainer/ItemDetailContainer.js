import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from "../Loading/Loading"
import { db } from "../../firebase/firebase"
import { getDoc, collection, doc } from "firebase/firestore";
import Recomendados from "../Recomendados/Recomendados";





export const ItemDetailContainer = ({greeting}) =>{

    const [movies, setMovies] = useState ([])
    
    const [loading, setLoading] = useState (true)
    
    
    const { movieId } = useParams()

    
    
   
    useEffect(() => {
        const moviesCollection = collection(db, 'movies');
        const refDoc = doc(moviesCollection, movieId)
        getDoc(refDoc).then(result => {
            setMovies({
                id: result.id,
                ...result.data(),
            })
           
        })
            
            .catch(err => console.error(err))
            .finally(()=> setLoading(false))
            
    }, [movieId]);

 

    

    

    return(
        <>
        {loading ? <Loading /> : <ItemDetail key={movies.id} {...movies} />}
        
        
        </>
    )
}

export default  ItemDetailContainer