import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import RatingStars from './RatingStars';
import '../Styles/BuyModal.css';

function ProductModal({ product, onClose, addToCart }) {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  let sumPrice = product.price * count;

  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!');
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.title,
      image: product.image,
      rating: product.rating?.rate || 0,
      size: selectedSize,
      count,
      price: product.price,
    };

    addToCart(itemToAdd, count);
    onClose(); // close modal after adding

    
  };

  return (
    <div className="modalOverLay" onClick={onClose}>
      <div className="slide-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>x</button>
        <div className="buyProductInfo">
          <img src={product.image} alt="clothesImg" className="buyImg" />
          <div className="titleAndPrice">
            <p className="buyTitle">{product.title}</p>
            <p className="buyPrice">{Math.round(product.price)}$</p>
          </div>
          <p className="buyDetail">Organic Cotton, Fair Trade quality</p>
          <RatingStars rating={product.rating?.rate} />
        </div>

        <div className="addCount">
          <button className="count-btn minus" onClick={decreaseCount} disabled={count === 1}>
            <span>−</span>
          </button>
          <span className="count-display">{String(count).padStart(2, '0')}</span>
          <button className="count-btn plus" onClick={increaseCount}>
            <span>+</span>
          </button>
        </div>

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
        <div className='addToCart'>
        <button className="addBtn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button className='cancBtn' onClick={onClose}>Cancel</button>
        <p className='sumPrice'><FaShoppingCart></FaShoppingCart>  {Math.round(sumPrice)} $</p>
        </div>

      </div>
    </div>
  );
}

export default ProductModal;
