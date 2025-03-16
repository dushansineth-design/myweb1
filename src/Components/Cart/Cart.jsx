import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    clearCart, 
    getCartTotal,
    cartCount 
  } = useCart();

  return (
    <div className="cart-container">
      <h1>Shopping Cart ({cartCount} items)</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                  <button 
                    onClick={() => {
                      console.log(`Removing item: ${item.id}`); // Debugging log
                      removeFromCart(item.id)}}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${getCartTotal()}</h2>
            <div className="button-group">
            <button 
              onClick={() => {
                console.log("Clearing cart..."); // Debugging log
                clearCart();
              }} 
              className="btn-secondary"
              >
              Clear Cart
            </button>
              <Link to="/checkout" className="btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;