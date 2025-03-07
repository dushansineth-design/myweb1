import { useState } from 'react'
//import { Link } from 'react-router-dom'
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import Login from './Components/Pages/Login/Login'
import FooterContent from "./Components/FooterContent/FooterContent";
import Home from "./Components/Pages/Home/Home";  // ✅ Import Home Page
import Shop from "./Components/Shop/Shop";  // ✅ Import Shop Page
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>


      <div id="wrapper">
        <HeaderContent />
        
        <Routes>  {/* ✅ Correctly place Routes here */}
          <Route path="/" element={<Home />} />  {/* ✅ Home page */}
          <Route path="/shop" element={<Shop />} />  {/* ✅ Shop page */}
        </Routes>

        <BodyContent />
        <Login />
        <FooterContent />
      </div>     
    </>
  )
}

export default App