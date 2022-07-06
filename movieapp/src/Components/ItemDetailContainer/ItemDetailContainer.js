import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import ItemDetail from './ItemDetail'
//import { useParams } from 'react-router-dom'




export const ItemDetailContainer = ({greeting}) =>{

    const [movie, setMovie] = useState ([])
    
    //const { movieId } = useParams()
    
    
    useEffect(() => {
        const URL = 'https://api.themoviedb.org/3/movie/453395?api_key=c7bc32cb271e85e8a5ce9bd75a0f66d4'
        console.log(URL)
            fetch(URL)        
            .then(response => response.json())           
            .then(data =>{ 
                console.log(data)
                setMovie(data)
            
            })
            
            .catch(err => console.error(err));
            
    },);


    
    

    return(
        <section>
            
           <ItemDetail movie={movie}></ItemDetail>
            
            

        </section>
    )
}

export default  ItemDetailContainer