import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext/CartContext';

const Layout = ({ children }) => {
  const { cartCount } = useCart();

  return (
    <div className="app-container">
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </nav>
      
      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;