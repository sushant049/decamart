import React, { useEffect, useState } from "react";
import Styles from './cartPage.module.scss';
import { Row, Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeFromCart } from '../../redux/actions/actions';

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(({ decaMart }) => decaMart?.cartItems);

    return (
        <Container className={Styles.CartContainer}>
            <h2>Your Cart</h2>
            <Row>
                {/* item list */}
                <Col md={8} className={Styles.Left}>
                    {
                        cart?.map((data, index) => (
                            <Row className={Styles.Product}>
                                <Col md={2} className={Styles.ProductImage}>
                                    <img src={data?.image} />
                                </Col>
                                <Col md={8} className={Styles.ProductTitle}>
                                    <span>{data?.title}</span>
                                    <br />
                                    <small>₹{data?.price}</small>
                                    <br />
                                    <InputGroup className={Styles.ProductCount}>
                                        <FormControl value={data?.quantity} />

                                        {
                                            data?.quantity > 1 ? (
                                                <Button variant="secondary"
                                                    onClick={() => dispatch(decreaseItem(data?.id))}>-</Button>
                                            ) : <Button variant="secondary" disabled>-</Button>
                                        }

                                        <Button variant="primary"
                                            onClick={() => dispatch(increaseItem(data?.id))}>+</Button>
                                    </InputGroup>
                                </Col>
                                <Col md={2} className={Styles.ProductAction}>
                                    <Button variant="light" onClick={() => dispatch(removeFromCart(data?.id))}><small>Remove</small></Button>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>

                {/* checkout details */}
                <Col md={4} className={Styles.Right}>
                    <div className={Styles.PriceDetails}>
                        <span>Total: ₹{cart && cart.reduce((total, n) => { return Math.ceil(total + (n.quantity * n.price)) }, 0)}</span>
                        <br />
                        <Button className="primary">Checkout</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage;