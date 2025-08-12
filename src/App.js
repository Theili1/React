import './App.css';
import { useState } from 'react';

// Importing components used in the main app
import FooterStatus from './Components/JSX/Footer';
import ClothingGrid from './Components/JSX/ClothingGrid';
import Header from './Components/JSX/Header';
import TopSite from './Components/JSX/TopSite';
import ProductModal from './Components/JSX/ProductModal';
import CartModal from './Components/JSX/CartModal';

function App() {

  // Removes a product from the cart by filtering it out based on product ID
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // State for items currently in the cart
  const [cartItems, setCartItems] = useState([]);

  // State for the currently selected product (used for showing the product modal)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State for controlling whether the cart modal is open
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Adds a product to the cart
  // If the same product (with same size) exists, increases the count instead of adding a duplicate
  const handleAddToCart = (product, count) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingItem) {
        // Update count for existing product
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, count: item.count + count }
            : item
        );
      } else {
        // Add new product to cart
        return [...prevItems, { ...product, count }];
      }
    });
    setSelectedProduct(null); // Close product modal after adding
  };

  return (
    <div className="App">
      {/* Top header section */}
      <Header />

      <div className="backGround">
        {/* Top site bar with cart button */}
        <TopSite 
          cartItems={cartItems} 
          openCartModal={() => setIsCartOpen(true)} 
        />

        {/* Main product grid */}
        <ClothingGrid
          addToCart={handleAddToCart}
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCart}
        />
      </div>

      {/* Product modal appears when a product is selected */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={handleAddToCart}
        />
      )}

      {/* Shopping cart modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />

      {/* Footer showing total number of items in the cart */}
      <FooterStatus
        cartCount={cartItems.reduce((total, item) => total + item.count, 0)}
      />
    </div>
  );
}

export default App;
