import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Check out our latest products!</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </div>
  );
};

export default Home;
