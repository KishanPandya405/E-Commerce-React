import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => { 
    setCart([...cart, product]);
  }

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  }

  return (
    <div className='App'>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/products" element={<ProductList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
