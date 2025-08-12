import '../Styles/cartModal.css'; // Styles for the cart modal
import Truck from '../../Pictures/Union.png'; // Truck icon
import Privacy from '../../Pictures/Union (1).png'; // Privacy/return policy icon

// Cart modal component for showing cart details, delivery info, and order summary
const CartModal = ({ isOpen, onClose, children, cartItems }) => {
  // Ensure cartItems is always an array to avoid errors
  const safeCartItems = cartItems || [];

  // If modal is closed, don't render anything
  if (!isOpen) return null;

  return (
    // Overlay background — clicking outside the modal closes it
    <div className="modalOverLay" onClick={onClose}>
      {/* Modal content — stops click from closing modal */}
      <div className="modalContent" onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button className="modalClose" onClick={onClose}>x</button> 

        {/* Extra content passed via children (if any) */}
        {children}

        <div className="modal-body">
          {/* Left column containing cart details and delivery info */}
          <div className="left-column">

            {/* Cart Details */}
            <div className="cartDetail">
              <p className='mainP'>Cart Detail</p>
              
              {/* Show empty cart message if no items */}
              {safeCartItems.length === 0 ? (
                <p style={{ opacity: 0.5 }}>Your cart is empty.</p>
              ) : (
                // Map through cart items and display them
                safeCartItems.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ display: 'flex', alignItems: 'center', marginTop: '10px', gap: '10px' }}
                  >
                    {/* Product image with quantity badge */}
                    <div style={{ position: 'relative', width: '60px', height: '60px', marginRight: '10px', marginTop: '20px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                      />
                      {/* Quantity badge */}
                      <span style={{
                        position: 'absolute',
                        bottom: '-5px',
                        right: '-6px',
                        background: '#ddd',
                        color: 'orange',
                        borderRadius: '50%',
                        padding: '10px 14px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}>
                        {item.count}
                      </span>
                    </div>

                    {/* Product details */}
                    <div>
                      <p style={{ marginTop: '10px', marginRight: '70px', fontSize: '14px' }}>
                        {item.name}
                      </p>
                      <p style={{
                        display: 'grid',
                        alignItems: 'end',
                        justifyContent: 'flex-end',
                        opacity: 0.8
                      }}>
                        {Math.round(item.price * item.count)}$
                      </p>
                      {item.size && (
                        <p style={{ display: 'flex', fontSize: '12px', opacity: 0.6 }}>
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Delivery Information */}
            <div className="deliverInfo">
              <div className="h3-btn">
                <p className='mainP'>Delivery Information</p>
                <button className="editBtn">Edit</button>
              </div>
              <br />
              <p className='deliParag'>Wade John Smith</p>
              <p className='deliParag'>New Zealand - 2nd Cross</p>
              <br />
              <p className='deliParag'>Cross road - Po 25698</p>
              <p className='deliParag'>United States</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="orderSum">
            <p className='mainP'>Order Summary</p>
            <br />
            <p>Products added</p>
            {/* This is where a product count or total could be displayed */}
            <br />
            <p>GST</p>
            <p className='deliParag'>1.25%</p>
            <br />
            <p>5-GST</p>
            <p className='deliParag'>1.25%</p>
            <br />
            <p>Total Cart Value <span className='deliParag'>(in $)</span></p>
            {/* This is where total price could be displayed */}
            <br />
            <p>Discount <span className='deliParag'>(in $)</span></p>
            <p className='deliParag'>7.5%</p>
            <br />

            {/* Order Summary Footer */}
            <div className="orderSumFooter">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Truck} alt="truck" />
                <p>Delivery limit</p>
              </div>
              <p className='underWrite'>Free delivery within 50km's</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Privacy} alt="privacy" />
                <p>Return Policy</p>
              </div>
              <p className='underWrite'>With-in 5day's of product delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
