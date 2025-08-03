import '../Styles/Banner.css'

import icon from '../../Pictures/icons.png'
import kid1 from '../../Pictures/730467bb9b9b22fb7431e359e7b494991e48c5d1.png'
import kid2 from '../../Pictures/df7b0007dd97febbd9c515a5b741d8978e5ec3fa.png'

const Banner = () => {
    return (
        <div className='adGroup'>
              
              <img src={icon} alt='icons' className='icons'></img>
              <p>Get 50% Off on <br></br>Selected categories</p>
              <button className='adBtn'>Shop Now</button>
              <img src={kid1} className='kidPic1' alt='kidPicture'></img>
              <img src={kid2} className='kidPic2' alt='kidPicture'></img>
               
              
            </div> 
    );
};

export default Banner;