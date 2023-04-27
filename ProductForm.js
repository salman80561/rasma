import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: productId, price: productPrice, name: productName });
    setProductId('');
    setProductPrice('');
    setProductName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Id" value={productId} onChange={(e) => setProductId(e.target.value)} required />
      <input type="text" placeholder="Selling price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;