import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from "../Loading/Loading"





export const ItemDetailContainer = ({greeting}) =>{

    const [movies, setMovies] = useState ([])
    
    const [loading, setLoading] = useState (true)
    
    
    const { movieId } = useParams()
    
    
   
    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4`
        console.log(URL)
            fetch(URL)        
            .then(response => response.json())           
            .then(data =>{ 
                //console.log(data)
                setMovies(data)
                console.log(data)
                
            
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