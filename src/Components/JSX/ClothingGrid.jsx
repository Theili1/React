import axios from 'axios';
import { useEffect, useState } from 'react';
import ClothingCard from './ClothingCard';
import ProductModal from './ProductModal';
import FooterStatus from './Footer';
import '../Styles/clothesGrid.css';

// Displays a grid of clothing products with favorite & cart functionality
const ClothingGrid = ({ addToCart, cartItems, removeFromCart }) => {
  // All fetched products
  const [products, setProducts] = useState([]);

  // Stores favorite products in an object { productId: true/false }
  const [favorites, setFavorites] = useState({});

  // The product currently selected for viewing in the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch men's and women's clothing from the API on component mount
  useEffect(() => {
    Promise.all([
      
      axios.get("https://dummyjson.com/products/category/mens-shirts"),
      axios.get("https://dummyjson.com/products/category/womens-dresses"),

      // Change the API => the images didn't appear

      // axios.get("https://fakestoreapi.com/products/category/men's clothing"),
      // axios.get("https://fakestoreapi.com/products/category/women's clothing"),


    ]).then(([menRes, womenRes]) => {

      // console.log(menRes);

      // Merge both product lists into one
      setProducts([...menRes.data.products, ...womenRes.data.products]);
    });
  }, []);

  // Toggle favorite state for a given product ID
  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Flip favorite status
    }));
  };

  // Check if a product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Count total number of favorited products
  const favoritesCount = Object.values(favorites).filter(Boolean).length;

  return (
    <div className="clothing-grid">
      {/* Render each product as a ClothingCard */}
      {products.map((product) => (
        <ClothingCard
          key={product.id}
          product={product}
          image = {product.image}
          isFavorite={!!favorites[product.id]}
          toggleFavorite={toggleFavorite}
          onSelect={() => setSelectedProduct(product)}
          isInCart={isInCart(product.id)}
          handleRemoveFromCart={removeFromCart}
        />
      ))}

      {/* Show product modal when a product is selected */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      {/* Floating text showing number of favorites (for testing/display) */}
      <p style={{
        position: 'fixed', 
        bottom: '18.75px', 
        left: '280px',
        zIndex: 10000,
        fontSize: '14px',
        fontWeight: 500,
      }}>
        {favoritesCount}
      </p>

      {/* Footer showing cart and favorite counts */}
      <FooterStatus
        cartCount={cartItems.length}
        favoritesCount={favoritesCount}
      />
      
    </div>
  );
};

export default ClothingGrid;
