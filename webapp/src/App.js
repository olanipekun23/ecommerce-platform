import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import LoginPage from './LoginPage';
import OrderPage from './OrderPage';

function App() {
  return (
    <Router>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/order">Order</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;

