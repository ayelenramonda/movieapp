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
                 
            if (!isInCart){
                navigate('/')
            } else {
                navigate('/Cart')

            }
            
        } catch (error) {
            if (error.code === "auth/invalid-email"){
                setError ("El email no existe")
            } else if(error.code === "auth/internal-error"){
                setError("No se puso procesar tu solicitud, intentá de nuevo")
            } else if (error.code === "auth/weak-password"){
                setError("La contraseña es icorrecta")
            } else if (error.code === "auth/user-not-found"){
                setError("El usuario no existe")
            } else if(error.code === "auth/wrong-password")
            setError("La contraseña es icorrecta")
           
            console.log(error.code)
            
        }
        
    }
    

    const handleGoogle = async () =>{
        await loginGoogle()
        navigate('/Cart')
       

    }
    return(

        <>



       
        
        <form className="registro" onSubmit={handleOnSubmit}>
            <h4>Ingresá con tu usuario</h4>
            
       
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="Contraseña" onChange={handleChange}></input>

        <button type="submit" className="btnRegistrarme">INGRESAR</button>
        <Link  to="/User"><span>Si no estás registrado hacé click acá</span></Link>
        </form>

        <button className="btnGoogle" onClick={handleGoogle}><img src={google} alt="google" />Acceder con Google</button>
        {error && <span className="error">{error}</span>}
        
        </>
        
        
    )
}
export default Login