import React, { createContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [qtyMovies, setQtyMovies] = useState(0);
    const [user, setUser] = useState(null);

   /*const getQtyMovies = () => {
        let qty = 0
        movies.forEach(movie => {
            qty += movie.qty
        })
        setQtyMovies(qty)
        
    }
*/
    useEffect(() => {
        const getQtyMovies = () => {
            let qty = 0
            movies.forEach(movie => {
                qty += movie.qty
            })
            setQtyMovies(qty)
            
        }
        getQtyMovies() 


        
    }, [movies])
   

    const addMovie = (movie) => {

        if (movies.find(obj => obj.id === movie.id)){
            document.querySelector(".duplicados").style.display="block"
            document.querySelector(".btnAgregar").style.display="none"
        }

       if (isInCart(movie.id)){
            const found = movies.find(obj => obj.id === movie.id)
            const index = movies.indexOf(found)
            const aux = [...movies]
            aux[index].qty += movie.qty
            
            setMovies(aux)
        }

       
        
       else{       
            
            setMovies([...movies, movie])
        }
    }
    console.log("carrito", movies)
    

    const deleteMovie = (id) => {
        const newCart = movies.filter(movie => movie.id !== (id))
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

    useEffect (() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })

    }, [])

  
    const signup = (email, pass) =>{
         return createUserWithEmailAndPassword(auth, email, pass)
    }

    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logout = () => signOut(auth)

    const loginGoogle = ()=>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
        

    }

    return (
        <Provider value={{ movies, addMovie, deleteMovie, clear, qtyMovies, signup, login, user, logout, loginGoogle, isInCart}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider