import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [qtyMovies, setQtyMovies] = useState(0);

   const getQtyMovies = () => {
        let qty = 0
        movies.forEach(movie => qty += movie.qty)
        setQtyMovies(qty)
        
    }

    useEffect(() => {
        getQtyMovies();

    }, [movies])
   

    const addMovie = (movie) => {
        if (movies.find(obj => obj.id === movie.id)){
            document.querySelector(".duplicados").style.display="block"
        }
       else{
            setMovies([...movies, movie])
        }
    }
    console.log("carrito", movies)
    

    const deleteMovie = (id) => {
        const newCart = movies.filter(movie => movie.id !== id)
        setMovies(newCart)
        
        
    };

    
/*
    const isInCart = (id) => {
        movies.some(movie => movie.id === id)
    };
*/
    const clear = () => {
        setMovies([]);
    }

    return (
        <Provider value={{ movies, addMovie, deleteMovie, clear, qtyMovies }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider