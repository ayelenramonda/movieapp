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
            navigate('/Cart')
            
        } catch (error)  {            
            console.log(error.message)
            setError('error.message')
          }
        
    }
    /*auth/invalid-email
    auth/internal-error
    auth/email-already-in-use
    auth/weak-password*/
    return(

        <>
        
        {error && <h3>{error}</h3>}
        <form className="registro" onSubmit={handleOnSubmit}>
            <h4>Mis datos</h4>
            
        
        <input type="text" name="email" placeholder="hola@mail.com" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="**********" onChange={handleChange}></input>

        <button type="submit" className="btnRegistrarme">REGISTRARME</button>
        </form>
        </>
        
        
    )
}
export default User