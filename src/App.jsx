import { useState } from 'react'
//import { Link } from 'react-router-dom'
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import Login from './Components/Pages/Login/Login'
import FooterContent from "./Components/FooterContent/FooterContent";
import Home from "./Components/Pages/Home/Home";  // ✅ Import Home Page
import Shop from "./Components/Shop/Shop";  // ✅ Import Shop Page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { CartProvider } from './Components/CartContext/CartContext'; // ✅ Import CartProvider
import Cart from './Components/Cart/Cart';

import {ThemeProvider} from 'styled-components';
import {AuthProvider} from './contexts/AuthContext';
import {CartProvider} from './Components/CartContext/CartContext';
import { theme } from './theme';

function App() {

  return (
    <>

<AuthProvider>
  <ThemeProvider theme={theme}>
    {/*<CartProvider>*/}

      <Router>

      <div id="wrapper">
        <HeaderContent />
        
        <Routes>  {/* ✅ Correctly place Routes here */}
          <Route path="/" element={<Home />} />  {/* ✅ Home page */}
          <Route path="/shop" element={<Shop />} />  {/* ✅ Shop page */}
          <Route path="/cart" element={<Cart />} />  {/* ✅ Cart page */}
          <Route path="/login" element={<Login />} />  {/* ✅ Login page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <BodyContent />
        <Login />
        <FooterContent />
      </div> 

      </Router> 
      
    {/*</CartProvider>*/}  
  </ThemeProvider>
</AuthProvider>
    </>
  )
}

export default App