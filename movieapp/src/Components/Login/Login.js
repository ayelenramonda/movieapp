import { useState } from "react"
import '../NavBar/navBar.css'
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'



export const Login = () => {

    const { login } = useContext(cartContext)
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const [user, setUser] = useState ({
        
        email:'',
        pass:'',
    })

    const handleChange = evt =>{
        setUser({ ...user, [evt.target.name]: evt.target.value });

    }
    const handleOnSubmit = async evt =>{
        evt.preventDefault()
        setError('')
        try {
            await login(user.email, user.pass)             
            //navigate('/Cart')
            
        } catch (error) {
            setError('El usuario o la clave son incorrectos')
            console.log(error)
            
        }
        
    }
    /*auth/invalid-email
    auth/internal-error
    auth/email-already-in-use
    auth/weak-password*/
    return(

        <>
        <p>hola</p>
        {error && <h3>{error}gdgd</h3>}
        <form className="registro" onSubmit={handleOnSubmit}>
            <h4>Ingresá con tu usuario</h4>
            
       
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="Contraseña" onChange={handleChange}></input>

        <button type="submit" className="btnRegistrarme">INGRESAR</button>
        </form>
        
        </>
        
        
    )
}
export default Login