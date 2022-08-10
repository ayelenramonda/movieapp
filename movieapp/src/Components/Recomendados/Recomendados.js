import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import { db } from "../../firebase/firebase"
import { getDocs, collection } from "firebase/firestore";
import  Loading  from "../Loading/Loading"






const API_IMG ="https://image.tmdb.org/t/p/w500/"
export const Recomendados = () =>{
    
    const [movies, setMovies] = useState ([])
    const [loading, setLoading] = useState (true)
      
    useEffect(() => {

        const que = collection(db, 'nuevo')

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
            
    }, );



  
   
    

    return(
       
<div className="cardsContain">
            {loading 
            ? <Loading /> 
            : <>{movies.map(movie => (<div key={movie.id} > 
                
                    <div className="cards">
          
                    <img className="imgCards" src={API_IMG+movie.poster_path} alt="poster"></img>      
                    <h3>{movie.title}</h3>
                    <p>PRÓXIMAMENTE</p> 
                        
                           
                    </div>
                    
            
            
            
            
            
            </div>))}</>}
            
            </div>
                   
            
          
            
            
            
            

        
    )
}

export default Recomendados