import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import { Link } from 'react-router-dom';
import './Home.css';
import { motion } from "framer-motion";
import { FaSearch, FaMoon, FaSun, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterContent from '../../FooterContent/FooterContent';
import pic6 from '../../../assets/pic6.png';
import pic8 from '../../../assets/pic8.png';
import pic10 from '../../../assets/pic10.png';
import pic11 from '../../../assets/pic11.png';
import pic12 from '../../../assets/pic12.png';
import pic13 from '../../../assets/pic13.png';
import pic14 from '../../../assets/pic14.png';
import pic15 from '../../../assets/pic15.png';



function Home() {
  //const [count, setCount] = useState(0)

  // Dark Mode Toggle State
  const [darkMode, setDarkMode] = useState(false);

  

  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <HeaderContent />

      {/* Dark Mode Toggle */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <BodyContent>
        {/* Hero Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Find the Best Tech for You</h1>
          <p>Shop the latest monitors, laptops, processors, RAM, and more.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button><FaSearch /></button>
          </div>
        </motion.div>

        {/* Floating Category Menu */}
        

        {/* Featured Products Section */}
        <div className="section-title">
          <h2>Featured Products</h2>
        </div>
        <motion.div
          className="product-grid"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            { img: pic6, title: "Monitors" },
            { img: pic8, title: "Laptops" },
            { img: pic15, title: "Processors" },
            { img: pic10, title: "Memory (RAM)" },
            { img: pic11, title: "Motherboards" },
            { img: pic12, title: "Power Supply" },
            { img: pic13, title: "Storages" },
            { img: pic14, title: "Input Devices" },
          ].map((item, index) => (
            <motion.div
              className="product-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <Link to="/shop" className="btn-primary">Shop Now</Link>
            </motion.div>
          ))}
        </motion.div>
      </BodyContent>
      
      <FooterContent />
    </div>
    </>
  );
}

export default Home
