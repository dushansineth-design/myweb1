import { createContext, useState, useContext } from 'react';
import './CartContext.css';


const CartContext = createContext(null);


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);



  
  const addToCart = (product) => {
    console.log("Attempting to add product:", product); // Debugging log

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.title === product.title);
      if (existingItem) {
        return prevItems.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setSelectedProduct(product);
    setShowModal(true);
  };

  
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  
  const clearCart = () => { 
    console.log("Clearing cart..."); 
    setCartItems([]);};

  
  const getCartTotal = () => 
    cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

 
   const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

   

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, cartCount }}>
      {children}
      
      
      {showModal && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedProduct.title} Added to Cart</h3>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="modal-image" />
            <p className='itemprice'>Price: ${selectedProduct.price}</p>
            <button className="btn-primary" onClick={() => setShowModal(false)}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("❌ useCart() must be used within a <CartProvider>.");
  }
  return context;
};
