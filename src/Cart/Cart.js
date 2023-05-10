import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import UICard from '../UI/UICard';
import Econtext from '../Store/ecom-context';

const Cart = (props) => {
    const ctx = useContext(Econtext);
    const [itemQuantity, setItemQuantity] = useState({});
    const totalAmount = `$${ctx.totalAmount}`;

    const addItemToCartHandler = (id) => {
        setItemQuantity((prevQuantity) => ({
            ...prevQuantity,
            [id]: (prevQuantity[id] || 0) + 1,
        }));
        ctx.onAddProd(id);
    };

    const removeItemFromCartHandler = (id) => {
        setItemQuantity((prevQuantity) => {
            const updatedQuantity = { ...prevQuantity };
            delete updatedQuantity[id];
            return updatedQuantity;
        });
        ctx.onRemoveProd(id);
    };

    return (
        <>
            <Container className="h-100 text-center w-100 mt-3" fluid>
                <h1
                    className="text-center fw-bold mb-5"
                    style={{ fontFamily: 'Metal Mania' }}
                >
                    Shopping Cart
                </h1>
                {ctx.cart.length === 0 && (
                    <Container className="rounded p-4 mb-4 shadow w-75">
                        <h2>Cart is Empty..</h2>
                    </Container>
                )}
                {ctx.cart.length !== 0 && (
                    <Container>
                        <Container className="rounded p-4 mb-4 shadow w-75">
                            <Row className="align-items-center">
                                <Col>
                                    <h2 className="fw-bold">Total Amount: </h2>
                                </Col>
                                <Col>
                                    <h2 className="fw-bold">{totalAmount}</h2>
                                </Col>
                            </Row>
                        </Container>
                        <UICard className="m-auto">
                            <Container sm={2} md={3}>
                                <Row>
                                    <Col>
                                        <h3 className="fw-bold">Item</h3>
                                    </Col>
                                    <Col>
                                        <h3 className="fw-bold">Quantity</h3>
                                    </Col>
                                    <Col>
                                        <h3 className="fw-bold">Price</h3>
                                    </Col>
                                </Row>
                                {ctx.cart.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        title={item.title}
                                        price={item.price}
                                        id={item.id}
                                        amount={item.amount}
                                        imageUrl={item.imageUrl}
                                        quantity={itemQuantity[item.id] || 1}
                                        onAdd={addItemToCartHandler.bind(null, item.id)}
                                        onRemove={removeItemFromCartHandler.bind(
                                            null,
                                            item.id
                                        )}
                                    />
                                ))}
                            </Container>
                        </UICard>
                        <Container className="rounded p-4 mb-5 shadow w-75">
                            <Button varient="info">PURCHASE</Button>
                        </Container>
                    </Container>
                )}
            </Container>
        </>
    );
};

export default Cart;
