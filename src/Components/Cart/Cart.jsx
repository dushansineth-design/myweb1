import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

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
                  <p>{item.price} x {item.quantity}</p>
                  <button 
                    onClick={() => removeFromCart(item.title)}
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
              <button onClick={clearCart} className="btn-secondary">
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