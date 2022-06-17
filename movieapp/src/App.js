import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

const listaContainer = () => console.log("Casablanca, Gladiador, Volver al futuro")  


function App() {
  return ( 
    <>   
    <NavBar /> 
    <ItemListContainer lista="Películas clásicas" mostrar={listaContainer}/>    
    </>  
    
  );
}

export default App;
