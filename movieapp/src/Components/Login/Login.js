import { useState } from "react"
import '../NavBar/navBar.css'
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom'
import google from '../../assets/g.svg'




export const Login = () => {

    const { login, loginGoogle, isInCart } = useContext(cartContext)
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
           {!isInCart ?  navigate('/') : navigate('/Cart')} 
            
        } catch (error) {
            setError(error.message)
            console.log(error.message)
            
        }
        
    }
    /*auth/invalid-email
    auth/internal-error
    auth/email-already-in-use
    auth/weak-password*/

    const handleGoogle = async () =>{
        await loginGoogle()
        navigate('/Cart')
       

    }
    return(

        <>
       
        {error ? <div id="carritoVacio">{error}</div> : null}
        <form className="registro" onSubmit={handleOnSubmit}>
            <h4>Ingresá con tu usuario</h4>
            
       
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="Contraseña" onChange={handleChange}></input>

        <button type="submit" className="btnRegistrarme">INGRESAR</button>
        <Link  to="/User"><span>Si no estás registrado hacé click acá</span></Link>
        </form>

        <button className="btnGoogle" onClick={handleGoogle}><img src={google} alt="google" />Acceder con Google</button>
        
        </>
        
        
    )
}
export default Login