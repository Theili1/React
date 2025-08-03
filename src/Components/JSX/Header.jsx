import { FaPhoneAlt } from 'react-icons/fa';
import  '../Styles/Header.css'

const Header = () => {
    return (
        <header>
        <FaPhoneAlt className='phoneIcon' />
        <p className='phoneNum'>+91 (720) 090 1896</p>
        <p className='hText'>Get 50% Off on Selected Items | Shop Now</p>
        </header>
    );
};

export default Header;