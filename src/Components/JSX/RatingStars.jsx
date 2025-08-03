import { FaStar } from 'react-icons/fa';

function RatingStars({ rating }) {
  return (
    <div className="product-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`star ${i < Math.round(rating) ? '' : 'inactive'}`}
        />
      ))}
    </div>
  );
}

export default RatingStars;
