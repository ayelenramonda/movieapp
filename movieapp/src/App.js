import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContain from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartCustomProvider from './Components/Context/CartContext'


const listaContainer = () => console.log("Casablanca, Gladiador, Volver al futuro")  


function App() {
  return ( <>
   
    {<BrowserRouter>
        <CartCustomProvider>
        <NavBar /> 
       
        <Routes>
            <Route path="/" element={<ItemListContainer lista="Películas clásicas" mostrar={listaContainer}  greeting={'My Movie App'}/>} />
            <Route path="/category/:categoryName" element={<ItemListContainer lista="Películas clásicas" mostrar={listaContainer}  greeting={'My Movie App'}/>} />
            <Route path="/movie/:movieId" element={<ItemDetailContain greeting={'My Movie App'}></ItemDetailContain>} />
            <Route path="/serie/:seriesId" element={<ItemDetailContain greeting={'My Movie App'}></ItemDetailContain>} />
            <Route path="/Cart" element={<Cart />} />          
        </Routes>
        </CartCustomProvider>
        
  </BrowserRouter> }
  
  </>
      
    
  );
}

export default App;
