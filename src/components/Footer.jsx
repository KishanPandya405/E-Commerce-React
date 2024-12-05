import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>© 2024 E-Commerce. All rights reserved.</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
