// CartContext.jsx
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedProduct.title} Added to Cart</h3>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="modal-image" />
            <p>Price: {selectedProduct.price}</p>
            <button className="btn-primary" onClick={closeModal}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);