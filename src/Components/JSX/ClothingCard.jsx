import { FaRegHeart, FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa';
import RatingStars from './RatingStars';
import '../Styles/clothes.css'

function ClothingCard({ 
  product, 
  isFavorite, 
  isInCart, 
  toggleFavorite, 
  onSelect,
  handleRemoveFromCart 
}) {
  return (
    <div className="clothing-card">
      <div>
        <div className={`image-container ${isInCart ? 'in-cart' : 'image-container'}`}>
  <img src={product.image} alt={product.title} className="product-img" />
  
  {isInCart ? (
    <button className="shop-btn" >
      <FaCheck style={{ color: 'green' }} />
    </button>
  ) : (
    <button className="shop-btn" onClick={onSelect}>
      <FaShoppingCart />
    </button>
  )}

  {isInCart ? (
    <button className="favorite-btn" onClick={() => handleRemoveFromCart(product.id)}>
      <FaTrash className="heart-icon" />
    </button>
  ) : (
    <button className="favorite-btn" onClick={() => toggleFavorite(product.id)}>
      <FaRegHeart className={`heart-icon ${isFavorite ? 'active' : ''}`} />
    </button>
  )}
</div>

      </div>

      <div className="card-info">
        <div className="info-top">
          <div>
            <p className="product-title">{product.title}</p>
            <p className="product-detail">Organic Cotton, Fair Trade quality</p>
          </div>
          <p className="product-price">{Math.round(product.price)}$</p>
        </div>
        <RatingStars rating={product.rating.rate} />
      </div>
    </div>
  );
}

export default ClothingCard;
