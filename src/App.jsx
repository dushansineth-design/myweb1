import { useState } from 'react'
//import { Link } from 'react-router-dom'
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import Login from './Components/Pages/Login/Login'
import FooterContent from "./Components/FooterContent/FooterContent";

function App() {

  return (
    <>

      
      <div id="wrapper" >
        <HeaderContent />
        <BodyContent>

        </BodyContent>

        <Login />

        <FooterContent />

      </div>
      
    </>
  )
}

export default App
