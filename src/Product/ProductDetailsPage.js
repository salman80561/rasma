import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Container, Image, Dropdown, Alert } from "react-bootstrap";
import Econtext from "../Store/ecom-context";
import axios from "axios";

const ProductDetailsPage = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const ctx = useContext(Econtext);
    const Navigate = useNavigate();
    const product = { ...ctx.SingleProduct };

    const AddtoCartHandler = async () => {
        const sameItemIndex = ctx.cart.findIndex(item => item.title === product.title);
        const sameItem = ctx.cart[sameItemIndex];
        if (sameItem) {
            const productObj = {
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                amount: (sameItem.amount + 1),

            };
            console.log(productObj)
            try {
                await axios.put(`https://ecommerce-react-bfa19-default-rtdb.firebaseio.com/${ctx.email}/${sameItem.id}`, productObj);
                ctx.updateCartItem(sameItemIndex, { ...sameItem, amount: (sameItem.amount + 1) });
                setIsAdded(true);
            } catch (error) {
                alert(error.response.data.error.message);
                setIsAdded(false);
            }
        } else {
            const productObj = {
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                amount: 1,
            };
            try {
                const response = await axios.post(`https://ecommerce-react-bfa19-default-rtdb.firebaseio.com/${ctx.email}`, productObj);
                const newItem = { ...productObj, id: response.data.name };
                ctx.onAddProduct(newItem); // modified this line
                setShowSuccessMessage(true);
                setIsAdded(true);
            } catch (error) {
                alert(error.response.data.error.message);
                setIsAdded(false);
            }
        }
    };
    

    const onShowHandler = () => {
        Navigate(`/Login/Cart/${ctx.token}`);
        ctx.onShowCart();
    };

    return (
        <>
            <Container className="border shadow m-auto mt-5" style={{ padding: '22px' }} >
                {showSuccessMessage && (
                    <Alert variant="success">
                        Added to cart!
                    </Alert>
                )}
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <Image src={product.imageUrl}></Image>
                            </td>
                            <td>
                                <h1>{product.title}</h1>
                                <h3>${product.price}</h3>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">Product Details
                                    </Dropdown.Toggle>
                                </Dropdown>
                                <h5>Rating & Reviews <Button variant="outline-info">Rate Product</Button></h5>
                                <div className="mb-2" style={{ display: 'flex', alignItems: 'flex-end', height: '200px', padding: '2rem' }}>
                                   

                                
                                    {isAdded && <Button size="lg" variant="secondary" onClick={onShowHandler}>Go to cart</Button>}
                                    {!isAdded && <Button size="lg" variant="secondary" onClick={AddtoCartHandler}>Add to cart</Button>}
                                    <Button size="lg" variant='info'>Buy now</Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
               


                </Table>
            </Container >

        </>
    )
}
export default ProductDetailsPage;