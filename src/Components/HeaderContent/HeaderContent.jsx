import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/pic19.png";
import './HeaderContent.css';

const HeaderContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Add this logout handler
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; // Redirect to home
  };

  // Add event listener for storage changes
  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const { username } = JSON.parse(userData);
        setIsLoggedIn(true);
        setUsername(username);
      } else {
        setIsLoggedIn(false);
        setUsername('');
      }
    };

    // Check auth on mount
    checkAuth();

    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  /*const handleLogout = () => {
    localStorage.removeItem('user');
    // Force refresh to update all components
    window.location.reload();
  };*/

  return (
    <div id="header">
      <div className="logo-container">
        <img src={logo} alt="Site Logo" />
      </div>

      <div className="menu-links">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

        {isLoggedIn ? (
          <div className="user-section">
            <span className="username">Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderContent;