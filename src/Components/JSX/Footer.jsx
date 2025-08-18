import '../Styles/footer.css';

import { FaRegHeart } from 'react-icons/fa';

import ShoppingCart from '../../Pictures/shopping-bag.png';

// FooterStatus component displays cart and wishlist counts
const FooterStatus = ({ cartCount, favoritesCount }) => {
  return (
    <div className="footer-status"> {/* Fixed footer container */}
      
      {/* Shopping cart icon (image) */}
      <img src={ShoppingCart} alt="shopping bag" className="bag" />

      {/* Display number of items in the cart */}
      <p className="spans">{cartCount} Items added to cart</p>

      {/* Wishlist heart icon */}
      <FaRegHeart className="heart-icon" />

      {/* Display number of wishlist items */}
      <span className="spans">{favoritesCount} Wish list</span>
    </div>
  );
};

// Exporting the component for use in other parts of the app
export default FooterStatus;
