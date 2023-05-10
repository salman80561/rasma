import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Quantity = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onChange(quantity);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button variant="outline-secondary" size="sm" onClick={handleDecrement}>
        -
      </Button>
      <span className="mx-2">{quantity}</span>
      <Button variant="outline-secondary" size="sm" onClick={handleIncrement}>
        +
      </Button>
      <Button variant="primary" size="sm" type="submit">
        Update
      </Button>
    </form>
  );
};

export default Quantity;
