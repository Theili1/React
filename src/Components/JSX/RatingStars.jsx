import { FaStar } from 'react-icons/fa'; 

// Component to display a 5-star rating system
function RatingStars({ rating }) {
  return (
    <div className="product-rating">
      {/* Create an array of length 5 and map through it to render stars */}
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i} // Unique key for each star
          // Apply 'inactive' class to stars beyond the given rating
          className={`star ${i < Math.round(rating) ? '' : 'inactive'}`}
        />
      ))}
    </div>
  );
}

export default RatingStars; // Export the component for use in other files
