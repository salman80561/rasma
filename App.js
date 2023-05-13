import React, { useState, useEffect } from 'react';
import Candy from './Candy';
import Cart from './Cart';

const App = () => {
  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch candies from the API
    fetchCandies();
  }, []);

  const fetchCandies = async () => {
    try {
      const response = await fetch('');
      const data = await response.json();
      setCandies(data);
    } catch (error) {
      console.error('Error fetching candies:', error);
    }
  };

  const addToCart = (candy) => {
    const updatedCartItems = [...cartItems, candy];
    setCartItems(updatedCartItems);

    // Store updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCandy = { name, description, amount };

    // Add the new candy to the API
    addCandy(newCandy);

    // Clear the input fields
    setName('');
    setDescription('');
    setAmount('');
  };

  const addCandy = async (candy) => {
    try {
      const response = await fetch('https://crudcrud.com/api/e5e4ba1e77d84ec5be5a66b863737619/candies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(candy),
      });
      const data = await response.json();

      // Update the candies state with the new candy
      setCandies([...candies, data]);
    } catch (error) {
      console.error('Error adding candy:', error);
    }
  };

  return (
    <div>
      <h1>Salman Candy Shop</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Candy Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Candy</button>
      </form>
      <div>
        <h2>Candies</h2>
        {candies.map((candy, index) => (
          <Candy key={index} candy={candy} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
