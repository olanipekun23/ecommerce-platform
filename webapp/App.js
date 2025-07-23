import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'; // 👈 import the new component

function App() {
  return (
    <Router>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/order">Order</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<h2>Product List</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/order" element={<h2>Order Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

