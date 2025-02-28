import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import { Link } from 'react-router-dom';
import './Home.css';
import { motion } from "framer-motion";
import { FaSearch, FaMoon, FaSun, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


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
            { img: "/assets/monitor.jpg", title: "Monitors", price: "$250" },
            { img: "/assets/laptop.jpg", title: "Laptops", price: "$1200" },
            { img: "/assets/cpu.jpg", title: "Processors", price: "$300" },
            { img: "/assets/ram.jpg", title: "Memory (RAM)", price: "$80" },
            { img: "/assets/motherboard.jpg", title: "Motherboards", price: "$150" },
            { img: "/assets/powersupply.jpg", title: "Power Supply", price: "$90" },
            { img: "/assets/storage.jpg", title: "Storages", price: "$100" },
            { img: "/assets/keyboard.jpg", title: "Input Devices", price: "$50" },
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
    </div>
    </>
  );
}

export default Home
