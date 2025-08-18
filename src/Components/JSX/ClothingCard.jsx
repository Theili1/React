import { FaRegHeart, FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa';

import RatingStars from './RatingStars'; // Rating Component

import '../Styles/clothes.css';


// Displays a single clothing product card with image, price, rating, and actions
function ClothingCard({ 
  product,            // Product data object
  isFavorite,         // Boolean: whether the product is marked as favorite
  isInCart,           // Boolean: whether the product is in the cart
  toggleFavorite,     // Function to toggle favorite status
  onSelect,           // Function to open product modal (select product)
  handleRemoveFromCart // Function to remove product from cart
  
}) {

  // console.log('Product image URL:', product.thumbnail); 

  return (
    <div className="clothing-card">
      <div>
        {/* Product image container (changes style if in cart) */}
        <div className={`image-container ${isInCart ? 'in-cart' : 'image-container'}`}>
          
          {/* Product image */}
          <img src={product.thumbnail} alt={product.title} className="product-img" />
          
          {/* Shopping cart button */}
          {isInCart ? (
            // If in cart => show checkmark icon
            <button className="shop-btn">
              <FaCheck style={{ color: 'green' }} />
            </button>
          ) : (
            // If not in cart => show shopping cart icon and open modal on click
            <button className="shop-btn" onClick={onSelect}>
              <FaShoppingCart />
            </button>
          )}

          {/* Favorite / Remove from cart button */}
          {isInCart ? (
            // If in cart => show trash icon to remove from cart
            <button className="favorite-btn" onClick={() => handleRemoveFromCart(product.id)}>
              <FaTrash className="heart-icon" />
            </button>
          ) : (
            // If not in cart => show heart icon to toggle favorite
            <button className="favorite-btn" onClick={() => toggleFavorite(product.id)}>
              <FaRegHeart className={`heart-icon ${isFavorite ? 'active' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {/* Product info section */}
      <div className="card-info">
        <div className="info-top">
          <div>
            {/* Product title and description */}
            <p className="product-title">{product.title}</p>
            <p className="product-detail">Organic Cotton, Fair Trade quality</p>
          </div>
          {/* Product price (rounded) */}
          <p className="product-price">{Math.round(product.price)}$</p>
        </div>
        {/* Product rating displayed as stars */}
        <RatingStars rating={product.rating} />
      </div>
    </div>
  );
}

export default ClothingCard;
