import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>

      {[{id:'c1', name: 'Sushi', amount:2, price: 12.90}].map((item)  =>(
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>

        <div>
            <button className={classes['button--alt']}></button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  );
  };

export default Cart;

