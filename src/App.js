import './App.css';
import { useState } from 'react';

import FooterStatus from './Components/JSX/Footer';

import ClothingGrid from './Components/JSX/ClothingGrid';
import Header from './Components/JSX/Header';
import TopSite from './Components/JSX/TopSite';
import ProductModal from './Components/JSX/ProductModal';
import CartModal from './Components/JSX/CartModal';




function App() {

  const handleRemoveFromCart = (productId) => {
  setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
};


  
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart logic
  const handleAddToCart = (product, count) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, count: item.count + count }
            : item
        );
      } else {
        return [...prevItems, { ...product, count }];
      }
    });
    setSelectedProduct(null); // Close modal after adding
  };

  return (
    <div className="App">
      <Header />

      <div className="backGround">
        <TopSite cartItems={cartItems} openCartModal={() => setIsCartOpen(true)} />

        <ClothingGrid
  addToCart={handleAddToCart}
  cartItems={cartItems}
  removeFromCart={handleRemoveFromCart}
/>


      </div>

      {/* Product modal when a product is selected */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={handleAddToCart}
        />
      )}

      {/* Cart modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />

      <FooterStatus
  cartCount={cartItems.reduce((total, item) => total + item.count, 0)}
      />


    </div>
  );
}

export default App;
