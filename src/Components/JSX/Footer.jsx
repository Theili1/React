import { FaRegHeart } from 'react-icons/fa';
import ShoppingCart from '../../Pictures/shopping-bag.png';
import '../Styles/footer.css';

const FooterStatus = ({ cartCount, favoritesCount }) => {
  return (
    <div className="footer-status">
      <img src={ShoppingCart} alt="shopping bag" className="bag" />
      <p className="spans">{cartCount} Items added to cart</p>

      <FaRegHeart className="heart-icon" />
      <p className="spans">{favoritesCount} Wish list</p>
    </div>
  );
};

export default FooterStatus;

