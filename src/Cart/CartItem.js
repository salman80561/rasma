import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Econtext from '../Store/ecom-context';
import classes from './CartItem.module.css';
import axios from 'axios';

const CartItem = props => {
  const ctx = useContext(Econtext);

  const onAddHandler = async () => {
    const updatedItem = {
      ...props,
      amount: props.amount + 1,
    };

    try {
      await axios.put(
        `https://ecomerse-app-12d71-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`,
        updatedItem
      );
      ctx.onShowCart();
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const onRemoveHandler = async () => {
    if (props.amount === 1) {
      props.onRemove(props.id);
      return;
    }

    const updatedItem = {
      ...props,
      amount: props.amount - 1,
    };

    try {
      await axios.put(
        `https://ecomerse-app-12d71-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`,
        updatedItem
      );
      ctx.onShowCart();
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <>
      <hr />
      <Row key={props.id} className="justify-content-center align-items-center">
        <Col>
          <p>{props.title}</p>
          <img
            className={`rounded border shadow ${classes.cart_product_image}`}
            src={props.imageUrl}
            alt="Your items added to cart"
          />
        </Col>
        <Col>
          <h3 className="fw-bold">
            Q{props.amount}
            <Button onClick={onAddHandler}>+</Button>
            <Button onClick={onRemoveHandler}>-</Button>
          </h3>
        </Col>
        <Col>
          <h3 className="fw-bold">${props.price} </h3>
          <Button onClick={() => props.onRemove(props.id)} variant="danger">
            Remove
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
