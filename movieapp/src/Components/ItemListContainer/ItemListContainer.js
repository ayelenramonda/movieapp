import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemList from "../Cards/ItemList"
import Loading from "../Loading/Loading"
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";
import Trailer from "../Trailer/Trailer";





export const ItemListContainer = ({lista, mostrar, greeting}) =>{

    const {categoryName} = useParams()
    

    const [movies, setMovies] = useState ([])
    const [loading, setLoading] = useState (true)

   
    useEffect(() => {


        //const moviesCollection = collection(db, 'movies')
        const que = categoryName 
            ? query(collection(db, 'movies'), where('category', '==', categoryName))
            : collection(db, 'movies')

        getDocs(que)
        .then ( result => {
            const lista = result.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data(),
                        }
                    })
            setMovies(lista)
                })
                .catch(err => console.error(err))
                .finally(()=> setLoading(false))




        /*const ruta = categoryName ? `https://api.themoviedb.org/3/movie/${categoryName}?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4` 
                                  : 'https://api.themoviedb.org/3/movie/popular?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4'
        
        console.log(ruta)  
            fetch(ruta)  
                
            .then(response => response.json())
                     
            .then(data =>{ 
               
                setMovies(data.results)
                
            
            })
            .catch(err => console.error(err))
            .finally(()=> setLoading(false))*/
            
    }, [categoryName]);



  
   
    

    return(
        <section>
            {/*<h1>{lista}</h1>
            <button className="btn" onClick={mostrar}>mostrar</button>  */}
           
            <h1>{}</h1>
           

            {loading ? <Loading /> : <ItemList movies={movies}></ItemList>}
            <Trailer movies={movies}></Trailer>
            
            
            

        </section>
    )
}

export default ItemListContainer