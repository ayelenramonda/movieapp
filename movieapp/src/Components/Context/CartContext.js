import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [qtyMovies, setQtyMovies] = useState(0);

   const getQtyMovies = () => {
        let qty = 0
        movies.forEach(movie => {
            qty += movie.qty
        })
        setQtyMovies(qty)
        
    }

    useEffect(() => {
        getQtyMovies();

    }, [movies])
   

    const addMovie = (movie) => {
        if (isInCart(movie.id)){
            const found = movies.find(obj => obj.id === movie.id)
            const index = movies.indexOf(found)
            const aux = [...movies]
            aux[index].qty += movie.qty
            
            setMovies(aux)
        }

        //if (movies.find(obj => obj.id === movie.id)){
           // document.querySelector(".duplicados").style.display="block"
        
       else{       
            
            setMovies([...movies, movie])
        }
    }
    console.log("carrito", movies)
    

    const deleteMovie = (id) => {
        const newCart = movies.filter(movie => movie.id !== parseInt(id))
        setMovies(newCart)
        console.log(id)
        
        
    };

    

    const isInCart = (id) => {
        movies.some(movie => movie.id === id)
    };

    const clear = () => {
        setMovies([]);
        setQtyMovies(0)
    }

    return (
        <Provider value={{ movies, addMovie, deleteMovie, clear, qtyMovies}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider