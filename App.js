import React, {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/" element={<Product handleAddToCart={handleAddToCart} />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
