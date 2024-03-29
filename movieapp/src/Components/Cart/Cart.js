import React, { useState, useEffect }from "react";
import '../NavBar/navBar.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { cartContext } from "../Context/CartContext";
import swal from 'sweetalert';
import { db } from "../../firebase/firebase"
import { collection, addDoc,serverTimestamp} from "firebase/firestore";




const Cart = () =>{
   const { movies, deleteMovie, clear, user, logout } = useContext(cartContext)
   
   const [ total, setTotal ] = useState(null);
   
      const inputs = [
        {
          label: "Nombre",
          name: "name"
        },
        {
            label: "Apellido",
            name: "surname"
          },
          {
            label: "DNI",
            name: "dni"
          },
        {
          label: "Telefono",
          name: "phone"
        },
        {
          label: "Email",
          name: "email"
        },
      ];
    
      const [formFields, setFormFields] = useState({
        name: "",
        surname: "",
        dni: "",
        phone: "",
        email: ""
      });
    
      function ingresarDatos(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
      }

     
    
      function onSubmit(evt) {
         swal("Tu pedido se realizó con éxito", `La compra se registró a nombre de ${formFields.name} ${formFields.surname}. Teléfono: ${formFields.phone} Email: ${formFields.email} por el valor total de $${calculateTotal(movies)}.`,  "success"
         
         )
         clear()
        
        
  
        const compra = {
          Buyer: {Name: formFields.name, Surname: formFields.surname, Phone: formFields.phone, dni: formFields.dni, Email: formFields.email},
          date: serverTimestamp(),
          Items: movies,
          Total: total
        };
        
        const compraCollection = collection(db, "compra");  
        addDoc(compraCollection, compra)
          .then(({ id }) => console.log(id));
  
        clear();
  
      };

      function onSubmitConUser(evt) {
        swal("Tu pedido se realizó con éxito", `La compra se registró a nombre del usuario:  ${user.email}  por un total de: $${calculateTotal(movies)}.`,  "success"
        
        )
        clear()
       
       
 
       const compraU = {
         Buyer: {Name: user.email},
         date: serverTimestamp(),
         Items: movies,
         Total: total
       };
       
       const compraCollection = collection(db, "compraU");  
       addDoc(compraCollection, compraU)
         .then(({ id }) => console.log(id));
 
       clear();
 
     };

    

    
    const removeFromCart = (e) => {
        
       swal({
            title: "¿Seguro que queres borrar esta peli?",
            text: "Igual tranqui, si te arrepentis la podés buscar de nuevo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
           
            if (willDelete) {
              swal("Lisssto", {
                icon: "success",
              });
            deleteMovie(e.target.value); 
            
              
            } else {
              swal({title:"¡Llevate todo!"});
              
            }
          });
        
    }
    const calculateTotal = function(movies){
		let total = 0;
		movies.map((movie) => (
      total += movie.qty * movie.price
    ))

		return total
	}

	useEffect(() => {		
		getTotal(calculateTotal(movies));
        
	}, [movies]);

    const getTotal = function(orderTotal){
        
		setTotal(orderTotal);
	}
  
      
      
      
      
    return(
        
        <div className="contentCart">
            <div className="compra">
        {movies.length === 0
         ? <Link to="/" ><p className="choose">No hay nada todavia, hacé click y elegí una peli</p></Link>
         : <>
            <h2>Peliculas seleccionadas</h2>
            {movies.map(movie => {

           
            return(
            <div key={movie.id} className="card">
            <div>
            {movie.backdrop_path}
            <h3>{movie.name}</h3>
            <p>Cantidad seleccionada:<strong> {movie.qty}</strong></p>
            <p>{movie.description}</p>
            <h5>Precio ${movie.price}</h5>
            <button className="btnEliminar" value={movie.id} onClick={removeFromCart} >Eliminar</button>
  
            
            </div>
         </div>)})}</>
         
            
    }
        {movies.length !== 0 
        ? <button  className="btnVaciar" onClick={clear}>Vaciar carrito</button>
        : null}
        </div>
        {movies.length !== 0
        ?<>
              {user === null 
              ?<>
                  <div className="comprador">
                          <h4>Iniciar sesión con mi usuario</h4>
                          <Link to="../Login"><button className="btnLogin">INICIAR SESIÓN</button></Link>
                          <h4>Datos del comprador:</h4>
                          {inputs.map((input) => (
                            <div key={input.name} >
                              <label>{input.label}</label>
                              <input
                                value={formFields[input.name]}
                                name={input.name}
                                type="text"
                                onChange={ingresarDatos}
                              />
                          </div>
                          
                          ))}
                          
                          
                        <p><strong>COSTO TOTAL: </strong> ${calculateTotal(movies)}</p>
                        <button  className="btnFinalizar" onClick={onSubmit}>Finalizar compra</button>
                        
                        </div>
                    </>

                  : <div className="comprador">          
                  <h4>Datos del comprador:</h4>
                  <h5>{user.displayName}</h5>
                  <p>Usuario: {user.email}</p>
                  <p><strong>COSTO TOTAL: </strong> ${calculateTotal(movies)}</p>
                  <button  className="btnFinalizar" onClick={onSubmitConUser}>Finalizar compra</button>
                  <button className="btnLogout" onClick={logout} >CERRAR SESIÓN</button>
                  </div>  
                  
              }</>
        : null }

        </div>
    )
}

export default Cart