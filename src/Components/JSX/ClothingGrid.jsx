// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import ClothingCard from './ClothingCard';
// import ProductModal from './ProductModal';
// import '../Styles/clothes.css';

// const ClothingGrid = ({ addToCart, cartItems, removeFromCart }) => {
//   const [products, setProducts] = useState([]);
//   const [favorites, setFavorites] = useState({});
//   const [selectedProduct, setSelectedProduct] = useState(null);

//    useEffect(() => {
//     Promise.all([
//       axios.get("https://fakestoreapi.com/products/category/men's clothing"),
//       axios.get("https://fakestoreapi.com/products/category/women's clothing"),
//     ]).then(([menRes, womenRes]) => {
//       setProducts([...menRes.data, ...womenRes.data]);
//     });
//   }, []);

//   const toggleFavorite = (productId) => {
//     setFavorites(prev => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   const isInCart = (productId) => {
//     return cartItems.some(item => item.id === productId);
//   };

//   return (
//     <div className="clothing-grid">
//       {products.map(product => (
//         <ClothingCard
//           key={product.id}
//           product={product}
//           isFavorite={!!favorites[product.id]}
//           toggleFavorite={toggleFavorite}
//           onSelect={() => setSelectedProduct(product)}
//           isInCart={isInCart(product.id)}
//           handleRemoveFromCart={removeFromCart}
//         />
//       ))}

//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//           addToCart={addToCart}
//         />
//       )}
//     </div>
//   );
// };

// export default ClothingGrid;
































import axios from 'axios';
import { useEffect, useState } from 'react';
import ClothingCard from './ClothingCard';
import ProductModal from './ProductModal';
import FooterStatus from './Footer';
import '../Styles/clothes.css';

const ClothingGrid = ({ addToCart, cartItems, removeFromCart }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get("https://fakestoreapi.com/products/category/men's clothing"),
      axios.get("https://fakestoreapi.com/products/category/women's clothing"),
    ]).then(([menRes, womenRes]) => {
      setProducts([...menRes.data, ...womenRes.data]);
    });
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const favoritesCount = Object.values(favorites).filter(Boolean).length;

  return (
    <div className="clothing-grid">
      {products.map((product) => (
        <ClothingCard
          key={product.id}
          product={product}
          isFavorite={!!favorites[product.id]}
          toggleFavorite={toggleFavorite}
          onSelect={() => setSelectedProduct(product)}
          isInCart={isInCart(product.id)}
          handleRemoveFromCart={removeFromCart}
        />
      ))}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
        <p style={{
          position: 'fixed', bottom: '18.75px', left: '280px',
          position:'fixed', zIndex: 10000,
          fontSize: '14px',
          fontWeight: 500,
          
          }}> {favoritesCount}</p>
      <FooterStatus
        cartCount={cartItems.length}
        favoritesCount={favoritesCount}
      />
    </div>
  );
};

export default ClothingGrid;
