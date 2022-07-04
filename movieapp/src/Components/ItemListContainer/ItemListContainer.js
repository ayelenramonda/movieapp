import React, {useState, useEffect} from "react";
import '../NavBar/navBar.css'
import '../ItemCount/ItemCount'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../Cards/ItemList"
import data from "../Cards/movies.json"
import Loading from "../Loading/Loading"




export const ItemListContainer = ({lista, mostrar, greeting}) =>{

    const [movies, setMovies] = useState ([])
    const [loading, setLoading] = useState (false)

    useEffect(() => {

        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                res(data)
            }, 2000)
        
        
        })

            setLoading(true);
        promise.then(res => {
            setLoading(false);
            setMovies(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);



    const onAdd = (mensaje) =>{        
        document.getElementById("detalleCarrito").innerHTML= mensaje  
        document.querySelector("#detalleCarrito").style.display="block"   
    }

    if (loading) {
        return (
          <>
            <Loading></Loading>
          </>
        );
      }
    

    return(
        <section>
            <h1>{lista}</h1>
            <button className="btn" onClick={mostrar}>mostrar</button>  

            <ItemCount stockTotal={10}  onAdd={onAdd}></ItemCount>
            <ItemList movies={movies}></ItemList>
            
            

        </section>
    )
}

export default ItemListContainer