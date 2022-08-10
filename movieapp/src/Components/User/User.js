import { useState } from "react"
import '../NavBar/navBar.css'
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';


export const User = () => {

    const { signup } = useContext(cartContext)
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
            

            await signup(user.email, user.pass)
            swal("El usuario se creo con éxito", `Usuario: ${user.email}`, "success") 
            evt.target.reset()        
            navigate('/Login')
            
        } catch (error) {
            if (error.code === "auth/invalid-email"){
                setError ("El email es inválido")
            } else if(error.code === "auth/internal-error"){
                setError("No se puso procesar tu solicitud, intentá de nuevo")
            } else if (error.code === "auth/weak-password"){
                setError("La contraseña es débil")
            } else if (error.code === "auth/user-not-found"){
                setError("El usuario no existe")
            } else if(error.code === "auth/wrong-password"){
                setError("La contraseña es icorrecta")
            } else if(error.code === "auth/email-already-in-use"){
                setError("El email ya esta en uso")
            }
           
           
            
        }
        
    }
    
    return(

        <>
        
       
        <form className="registro" onSubmit={handleOnSubmit}>
            <h4>Mis datos</h4>
            
        
        <input type="text" name="email" placeholder="hola@mail.com" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="**********" onChange={handleChange}></input>

        <button type="submit" className="btnRegistrarme">REGISTRARME</button>
        </form>
        <br></br>
        {error && <span className="error">{error}</span>}
        </>
        
        
    )
}
export default User