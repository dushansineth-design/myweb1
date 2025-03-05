import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../App.css";
import HeaderContent from "../HeaderContent/HeaderContent";
import BodyContent from "../BodyContent/BodyContent";
import FooterContent from "../FooterContent/FooterContent";
import "./Shop.css";
import pic6 from '../../assets/pic6.png';
import pic8 from '../../assets/pic8.png';
import pic10 from '../../assets/pic10.png';
import pic11 from '../../assets/pic11.png';
import pic12 from '../../assets/pic12.png';
import pic13 from '../../assets/pic13.png';
import pic14 from '../../assets/pic14.png';
import pic15 from '../../assets/pic15.png';

import pic20 from '../../assets/pic20.png';
import pic21 from '../../assets/pic21.png';
import pic22 from '../../assets/pic22.png';
import pic23 from '../../assets/pic23.png';
import pic24 from '../../assets/pic24.png';
import pic25 from '../../assets/pic25.png';
import pic26 from '../../assets/pic26.png';
import pic27 from '../../assets/pic27.png';
import pic28 from '../../assets/pic28.png';
import pic29 from '../../assets/pic29.png';
import pic30 from '../../assets/pic30.png';
import pic31 from '../../assets/pic31.png';
import pic32 from '../../assets/pic32.png';
import pic33 from '../../assets/pic33.png';
import pic34 from '../../assets/pic34.png';
import pic35 from '../../assets/pic35.png';
import pic36 from '../../assets/pic36.png';
import pic37 from '../../assets/pic37.png';
import pic38 from '../../assets/pic38.png';
import pic39 from '../../assets/pic39.png';
import pic40 from '../../assets/pic40.png';
import pic41 from '../../assets/pic41.png';
import pic42 from '../../assets/pic42.png';
import pic43 from '../../assets/pic43.png';
import pic44 from '../../assets/pic44.png';
import pic45 from '../../assets/pic45.png';
import pic46 from '../../assets/pic46.png';
import pic47 from '../../assets/pic47.png';
import pic48 from '../../assets/pic48.png';
import pic49 from '../../assets/pic49.png';
import pic50 from '../../assets/pic50.png';
import pic51 from '../../assets/pic51.png';

function Shop() {
  const products = [
    { img: pic20, title: "MSI MAG 34' UWQHD", price: "$250" },
    { img: pic21, title: "MSI MAG 27' WQHD", price: "$1200" },
    { img: pic22, title: "MSI MAG WQHD", price: "$300" },
    { img: pic23, title: "ViewSonic 22'", price: "$80" },
    { img: pic24, title: "ASUS TUF", price: "$150" },
    { img: pic25, title: "ASUS ROG STRIX", price: "$90" },
    { img: pic26, title: "MSI PULS GL-66", price: "$100" },
    { img: pic27, title: "ASUS Vivobook", price: "$50" },
    { img: pic28, title: "AMD RYZEN 7", price: "$250" },
    { img: pic29, title: "AMD RYZEN 9", price: "$1200" },
    { img: pic30, title: "intel Core i7(10th GEN)", price: "$300" },
    { img: pic31, title: "intel Core i9(12th GEN)", price: "$80" },
    { img: pic32, title: "TRIDENTZ(RGB) - DDR5", price: "$150" },
    { img: pic33, title: "VENGEANCE(RGB) - DDR5", price: "$90" },
    { img: pic34, title: "TRIDENTZ(RGB) - DDR4", price: "$100" },
    { img: pic35, title: "bread - DDR3", price: "$50" },
    { img: pic36, title: "ASUS ROG STRIX X678", price: "$250" },
    { img: pic37, title: "MSI X870", price: "$1200" },
    { img: pic38, title: "ASUS ROG STRIX B780", price: "$300" },
    { img: pic39, title: "GIGABYTE G450", price: "$80" },
    { img: pic40, title: "Corsair RM1200x", price: "$150" },
    { img: pic41, title: "ANTEC ATOM F750", price: "$90" },
    { img: pic42, title: "SEOSONIC S12", price: "$100" },
    { img: pic43, title: "SEOSONIC Vtex", price: "$50" },
    { img: pic44, title: "Weston DIgital CAVIAR 1TB", price: "$250" },
    { img: pic45, title: "TOSHIBA 2TB", price: "$1200" },
    { img: pic46, title: "SAMSUNG 870", price: "$300" },
    { img: pic47, title: "KINGSTON V960", price: "$80" },
    { img: pic48, title: "Mouse", price: "$150" },
    { img: pic49, title: "Keyboard", price: "$90" },
    { img: pic50, title: "Playstation", price: "$100" },
    { img: pic51, title: "Headphone,Headset", price: "$50" },
  ];

  return (
    <div className="shop-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="shop-title">Welcome to Our Shop</h1>
        <div className="shop-grid">
          {products.map((item, index) => (
            <motion.div
              className="shop-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <Link to="/cart" className="btn-primary">Add to Cart</Link>
            </motion.div>
          ))}
        </div>
      </BodyContent>
      <FooterContent />
    </div>
  );
}

export default Shop;
