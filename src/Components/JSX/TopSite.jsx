import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import CartModal from './CartModal';
import Banner from '../JSX/Banner';

import '../Styles/topSite.css';
import logo from '../../Pictures/6b20415fedac8b4ec9a195f79e28cf4c95c69be1 (1).png';

const TopSite = ({ cartItems }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='logo-name'>
      <img src={logo} className='logoImg' alt='Logo' />
      <span className='shopName'>
        Minimal <span className='shopColor'>Shop</span>ping
      </span>

      <button className='headBtn'>Categories</button>
      <button className='headBtn'>Deals</button>
      <button className='headBtn'>What's New</button>
      <button className='headBtn'>Delivery</button>

      <div className='mainBtn'>
        <button className='Btn'>
          <FaUser /> Account
        </button>
        <button className='Btn' onClick={() => setModalOpen(true)}>
          Cart
        </button>
      </div>

      {/* orange banner */}
      <Banner />

      {/* 🛒 Cart Modal with cartItems passed as prop */}
      <CartModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        cartItems={cartItems}
      />
    </div>
  );
};

export default TopSite;
