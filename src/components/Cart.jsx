import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions";
import '../styles/Cart.css'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

    const handleRemove = (product) => {
        dispatch (removeFromCart(product));
    }
    return(
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart Is Empty</p> : (
              <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p>${item.price}</p>
                      <button onClick={() => handleRemove(item)} className="btn btn-danger">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Display total amount */}
              <div className="cart-total">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
      );
    };
export default Cart;