import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemList from "../Cards/ItemList"
import Loading from "../Loading/Loading"
import { useParams } from 'react-router-dom'





export const ItemListContainer = ({lista, mostrar, greeting}) =>{

    const {categoryName} = useParams()
    

    const [movies, setMovies] = useState ([])
    const [loading, setLoading] = useState (true)

   
    useEffect(() => {
           
        const ruta = categoryName ? `https://api.themoviedb.org/3/movie/${categoryName}?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4` 
                                  : 'https://api.themoviedb.org/3/movie/popular?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4'
        
        console.log(ruta)  
            fetch(ruta)  
                
            .then(response => response.json())
                     
            .then(data =>{ 
               
                setMovies(data.results)
                
            
            })
            .catch(err => console.error(err))
            .finally(()=> setLoading(false))
            
    }, [categoryName]);



  
   
    

    return(
        <section>
            {/*<h1>{lista}</h1>
            <button className="btn" onClick={mostrar}>mostrar</button>  */}
           
            <h1>{greeting}</h1>
           

            {loading ? <Loading /> : <ItemList movies={movies}></ItemList>}
            
            
            

        </section>
    )
}

export default ItemListContainer