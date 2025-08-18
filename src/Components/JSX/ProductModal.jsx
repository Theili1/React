import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import RatingStars from './RatingStars'; // Rating Component

import '../Styles/BuyModal.css';

// Product modal component for buying a product
function ProductModal({ product, onClose, addToCart }) {
  // Quantity of the product to be added
  const [count, setCount] = useState(1);

  // Selected product size
  const [selectedSize, setSelectedSize] = useState(null);

  // Total price based on quantity
  let sumPrice = product.price * count;

  // Increase product quantity
  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  // Decrease product quantity (minimum 1)
  const decreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  // Handle size button click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Add product to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!');
      return; // Stop if size not chosen
    }

    // Prepare product details to add to cart
    const itemToAdd = {
      id: product.id,
      name: product.title,
      image: product.thumbnail,
      rating: product.rating || 0,
      size: selectedSize,
      count,
      price: product.price,
    };

    addToCart(itemToAdd, count); // Call parent addToCart function
    onClose(); // Close modal after adding
  };

  return (
    // Overlay background (clicking outside closes modal)
    <div className="modalOverLay" onClick={onClose}>
      {/* Modal content (stop click propagation so modal stays open) */}
      <div className="slide-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>x</button>

        {/* Product details section */}
        <div className="buyProductInfo">
          <img src={product.thumbnail} alt="clothesImg" className="buyImg" />
          <div className="titleAndPrice">
            <p className="buyTitle">{product.title}</p>
            <p className="buyPrice">{Math.round(product.price)}$</p>
          </div>
          <p className="buyDetail">Organic Cotton, Fair Trade quality</p>
          <RatingStars rating={product.rating} />
        </div>

        {/* Quantity selector */}
        <div className="addCount">
          <button className="count-btn minus" onClick={decreaseCount} disabled={count === 1}>
            <span>−</span>
          </button>
          {/* Display quantity in two-digit format */}
          <span className="count-display">{String(count).padStart(2, '0')}</span>
          <button className="count-btn plus" onClick={increaseCount}>
            <span>+</span>
          </button>
        </div>

        {/* Size selection buttons */}
        <div className="sizes">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button
              key={size}
              className={`sizeBtn ${selectedSize === size ? 'activeSize' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to cart and cancel buttons */}
        <div className='addToCart'>
          <button className="addBtn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className='cancBtn' onClick={onClose}>Cancel</button>

          {/* Display total price with cart icon */}
          <p className='sumPrice'>
            <FaShoppingCart /> {Math.round(sumPrice)} $
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductModal;
