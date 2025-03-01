import { useState } from "react";
import "../../../App.css";
import HeaderContent from "../../HeaderContent/HeaderContent";
import BodyContent from "../../BodyContent/BodyContent";
import FooterContent from "../../FooterContent/FooterContent";
import { motion } from "framer-motion";
import { FaLaptop, FaTools, FaShippingFast, FaHeadset } from "react-icons/fa";
import "./Services.css";

function Services() {

  

  const services = [
    {
      icon: <FaLaptop />,
      title: "Custom PC Builds",
      description: "We build high-performance PCs tailored to your needs.",
    },
    {
      icon: <FaTools />,
      title: "Repair & Maintenance",
      description: "Professional repair services for all types of computers.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast & Secure Delivery",
      description: "Reliable and safe delivery for all our products.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description: "Expert assistance whenever you need it.",
    },
  ];

  

  return (
    <>
      <HeaderContent />
      

      <BodyContent>
        <div className="services-container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-description">
            We provide high-quality services to meet all your technology needs.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h2 className="stitle">{service.title}</h2>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </BodyContent>
      <FooterContent />
    </>
  );
}

export default Services;
