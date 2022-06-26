import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import CardProducts from './Components/Cards/CardProduct'

const listaContainer = () => console.log("Casablanca, Gladiador, Volver al futuro")  


function App() {
  return ( 
    <>   
    <NavBar /> 
    <CardProducts />
    <ItemListContainer lista="Películas clásicas" mostrar={listaContainer}/>    
    </>  
    
  );
}

export default App;
