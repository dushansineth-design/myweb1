import React from 'react'
import logo from "../../assets/pic19.png"
import './HeaderContent.css'
//import MenuLink from '../MenuLink/MenuLink'
import { Link } from 'react-router-dom'

const HeaderContent = () => {
  return (
    <div id="header">
      <div>
        <img src={logo} />
      </div>

      <div className="menu-links">

        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
      
    </div>
  )
}

export default HeaderContent
