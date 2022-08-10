import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemList from "../Cards/ItemList"
import Loading from "../Loading/Loading"
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";







export const ItemListContainer = ({lista, mostrar, greeting}) =>{

    const {categoryName} = useParams()
    const { user } = useContext(cartContext)
    
    

    const [movies, setMovies] = useState ([])
    const [loading, setLoading] = useState (true)
    const [selectMovie, setSelectMovie] = useState({})
    const API_IMG ="https://image.tmdb.org/t/p/original"

   
    useEffect(() => {

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
            setSelectMovie(lista[0])
                })
                .catch(err => console.error(err))
                .finally(()=> setLoading(false))
            
    }, [categoryName]);



  
   
    

    return(
        <section>
                   
            {user ? <div className="textoU">Estás logueado como {user.email}</div> : null }
           {loading 
            ? <Loading /> 
            :<>
                <div className='hero' style={{backgroundImage: `url('${API_IMG}${selectMovie.backdrop_path}')`}}>
                <div className="heroContent">
                <h1>{selectMovie.title}</h1>
                <h3>${selectMovie.price}</h3>
                <p>{selectMovie.overview}</p>
                </div>
                </div>
                <ItemList movies={movies} selectMovie={setSelectMovie}></ItemList>
                </>

            
                }
           
            
            
            
            

        </section>
    )
}

export default ItemListContainer