import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isInCart = cart.find((item) => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {isInCart ? (
        <button onClick={handleRemoveFromCart} className="btn btn-danger">
          Remove from Cart
        </button>
      ) : (
        <button onClick={handleAddToCart} className="btn btn-primary">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
