import React, { useContext, useState } from 'react';
import { Navbar, Nav, Badge, Image, NavDropdown, Offcanvas, Container, ListGroup, Button } from 'react-bootstrap';
import Econtext from '../Store/ecom-context';
import user from '../Images/user.png';
import { NavLink } from 'react-router-dom';

function Welcome() {
    const ctx = useContext(Econtext);
    const [showCart, setShowCart] = useState(false);

    const logoutHandler = () => {
        ctx.logout();
    }

    const toggleCartHandler = () => {
        setShowCart(prevState => !prevState);
    }

    const removeProductHandler = (productId) => {
        ctx.removeProductFromCart(productId);
    }

    return (<>
        <Navbar bg="dark" variant="dark" fixed='top'>
            <Nav className="me-auto">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/About' >About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/ContactUs' >ContactUs</Nav.Link>
                </Nav.Item>
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Login' >Login</Nav.Link>
                </Nav.Item>}
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Signup' >Signup</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/Product/${ctx.token}`} >Store</Nav.Link>
                </Nav.Item>}
               
            </Nav>
            <Nav className='ms-auto' style={{ gap: '2rem' }}>
            {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/' onClick={logoutHandler} >Logout</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='#' onClick={toggleCartHandler}>
                        Cart
                        <Badge bg="light" style={{
                            position: 'absolute', color: '#56CCF2',
                            fontSize: '15px'
                        }}>{ctx.cart.length}</Badge>

                    </Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/${ctx.email}`}><Image style={{ width: '20px' }} src={user} roundedCircle /> {ctx.email} </Nav.Link>
                </Nav.Item>}
            </Nav>
        </Navbar>

        <Offcanvas show={showCart} onHide={toggleCartHandler}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup>
                    {ctx.cart.map(product => (
                        <ListGroup.Item key={product.id}>
                            {product.name} x {product.amount}
                            <Button variant="danger" size="sm" className="float-end" onClick={() => removeProductHandler(product.id)}>Remove</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>

    </>

    );
}

export default Welcome;
